import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactInfo
/** 
 * Contact information defining a Customer Match audience member.
**/
export class ContactInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=hashedEmails" })
  hashedEmails?: string[];

  @Metadata({ data: "json, name=hashedFirstName" })
  hashedFirstName?: string;

  @Metadata({ data: "json, name=hashedLastName" })
  hashedLastName?: string;

  @Metadata({ data: "json, name=hashedPhoneNumbers" })
  hashedPhoneNumbers?: string[];

  @Metadata({ data: "json, name=zipCodes" })
  zipCodes?: string[];
}
