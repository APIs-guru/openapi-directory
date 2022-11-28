import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeGroup } from "./creativegroup";
/**
 * Creative Group List Response
**/
export declare class CreativeGroupsListResponse extends SpeakeasyBase {
    creativeGroups?: CreativeGroup[];
    kind?: string;
    nextPageToken?: string;
}
