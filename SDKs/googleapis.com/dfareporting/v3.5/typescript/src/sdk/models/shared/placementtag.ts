import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagData } from "./tagdata";


// PlacementTag
/** 
 * Placement Tag
**/
export class PlacementTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=placementId" })
  placementId?: string;

  @Metadata({ data: "json, name=tagDatas", elemType: shared.TagData })
  tagDatas?: TagData[];
}
