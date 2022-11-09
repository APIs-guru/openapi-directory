import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacementTag } from "./placementtag";


// PlacementsGenerateTagsResponse
/** 
 * Placement GenerateTags Response
**/
export class PlacementsGenerateTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=placementTags", elemType: shared.PlacementTag })
  placementTags?: PlacementTag[];
}
