import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";


export class FirstLastNamePhoneNumberGeoIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstLastNameOriginedOut" })
  firstLastNameOriginedOut?: FirstLastNameOriginedOut;

  @Metadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @Metadata({ data: "json, name=countryIso2Alt" })
  countryIso2Alt?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
