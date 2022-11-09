import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacementGroup } from "./placementgroup";


// PlacementGroupsListResponse
/** 
 * Placement Group List Response
**/
export class PlacementGroupsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=placementGroups", elemType: shared.PlacementGroup })
  placementGroups?: PlacementGroup[];
}
