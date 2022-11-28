import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PersonalNameGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
