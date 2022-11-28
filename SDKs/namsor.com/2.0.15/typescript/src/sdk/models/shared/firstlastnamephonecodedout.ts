import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirstLastNamePhoneCodedOut
/** 
 * Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
**/
export class FirstLastNamePhoneCodedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internationalPhoneNumberVerified" })
  internationalPhoneNumberVerified?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=originCountryIso2" })
  originCountryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=originCountryIso2Alt" })
  originCountryIso2Alt?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneCountryCode" })
  phoneCountryCode?: number;

  @SpeakeasyMetadata({ data: "json, name=phoneCountryCodeAlt" })
  phoneCountryCodeAlt?: number;

  @SpeakeasyMetadata({ data: "json, name=phoneCountryIso2" })
  phoneCountryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneCountryIso2Alt" })
  phoneCountryIso2Alt?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneCountryIso2Verified" })
  phoneCountryIso2Verified?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}
