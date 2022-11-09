import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirstLastNamePhoneCodedOut
/** 
 * Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
**/
export class FirstLastNamePhoneCodedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internationalPhoneNumberVerified" })
  internationalPhoneNumberVerified?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=originCountryIso2" })
  originCountryIso2?: string;

  @Metadata({ data: "json, name=originCountryIso2Alt" })
  originCountryIso2Alt?: string;

  @Metadata({ data: "json, name=phoneCountryCode" })
  phoneCountryCode?: number;

  @Metadata({ data: "json, name=phoneCountryCodeAlt" })
  phoneCountryCodeAlt?: number;

  @Metadata({ data: "json, name=phoneCountryIso2" })
  phoneCountryIso2?: string;

  @Metadata({ data: "json, name=phoneCountryIso2Alt" })
  phoneCountryIso2Alt?: string;

  @Metadata({ data: "json, name=phoneCountryIso2Verified" })
  phoneCountryIso2Verified?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}
