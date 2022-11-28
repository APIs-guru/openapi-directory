import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroup } from "./placementgroup";
/**
 * Placement Group List Response
**/
export declare class PlacementGroupsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    placementGroups?: PlacementGroup[];
}
