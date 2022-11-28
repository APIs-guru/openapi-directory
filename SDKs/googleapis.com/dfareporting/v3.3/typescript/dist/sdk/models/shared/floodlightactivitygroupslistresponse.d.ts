import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivityGroup } from "./floodlightactivitygroup";
/**
 * Floodlight Activity Group List Response
**/
export declare class FloodlightActivityGroupsListResponse extends SpeakeasyBase {
    floodlightActivityGroups?: FloodlightActivityGroup[];
    kind?: string;
    nextPageToken?: string;
}
