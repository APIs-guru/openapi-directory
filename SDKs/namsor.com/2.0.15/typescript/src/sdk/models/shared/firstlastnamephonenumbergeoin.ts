import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";



export class FirstLastNamePhoneNumberGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstLastNameOriginedOut" })
  firstLastNameOriginedOut?: FirstLastNameOriginedOut;

  @SpeakeasyMetadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=countryIso2Alt" })
  countryIso2Alt?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
