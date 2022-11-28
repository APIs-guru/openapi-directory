import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaceInfo } from "./placeinfo";



// Places
/** 
 * Defines the union of areas represented by a set of places.
**/
export class Places extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placeInfos", elemType: PlaceInfo })
  placeInfos?: PlaceInfo[];
}
