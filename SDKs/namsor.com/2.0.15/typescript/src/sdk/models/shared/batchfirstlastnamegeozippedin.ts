import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGeoZippedIn } from "./firstlastnamegeozippedin";



export class BatchFirstLastNameGeoZippedIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameGeoZippedIn })
  personalNames?: FirstLastNameGeoZippedIn[];
}
