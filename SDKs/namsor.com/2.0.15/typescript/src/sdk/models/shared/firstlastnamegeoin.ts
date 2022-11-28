import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FirstLastNameGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;
}
