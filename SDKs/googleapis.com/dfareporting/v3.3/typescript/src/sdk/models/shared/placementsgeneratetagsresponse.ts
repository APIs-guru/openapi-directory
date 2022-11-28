import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementTag } from "./placementtag";



// PlacementsGenerateTagsResponse
/** 
 * Placement GenerateTags Response
**/
export class PlacementsGenerateTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=placementTags", elemType: PlacementTag })
  placementTags?: PlacementTag[];
}
