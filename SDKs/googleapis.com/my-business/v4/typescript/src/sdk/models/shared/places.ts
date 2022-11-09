import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaceInfo } from "./placeinfo";


// Places
/** 
 * Defines the union of areas represented by a set of places.
**/
export class Places extends SpeakeasyBase {
  @Metadata({ data: "json, name=placeInfos", elemType: shared.PlaceInfo })
  placeInfos?: PlaceInfo[];
}
