import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";



export class BatchFirstLastNameGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameGeoIn })
  personalNames?: FirstLastNameGeoIn[];
}
