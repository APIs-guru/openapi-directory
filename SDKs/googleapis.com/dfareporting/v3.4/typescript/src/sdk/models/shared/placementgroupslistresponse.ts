import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroup } from "./placementgroup";



// PlacementGroupsListResponse
/** 
 * Placement Group List Response
**/
export class PlacementGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=placementGroups", elemType: PlacementGroup })
  placementGroups?: PlacementGroup[];
}
