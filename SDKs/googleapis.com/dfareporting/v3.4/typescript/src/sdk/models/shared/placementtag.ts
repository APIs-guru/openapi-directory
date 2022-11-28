import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagData } from "./tagdata";



// PlacementTag
/** 
 * Placement Tag
**/
export class PlacementTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placementId" })
  placementId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagDatas", elemType: TagData })
  tagDatas?: TagData[];
}
