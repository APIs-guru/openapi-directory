import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactInfo
/** 
 * Contact information defining a Customer Match audience member.
**/
export class ContactInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=hashedEmails" })
  hashedEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=hashedFirstName" })
  hashedFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=hashedLastName" })
  hashedLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=hashedPhoneNumbers" })
  hashedPhoneNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=zipCodes" })
  zipCodes?: string[];
}
