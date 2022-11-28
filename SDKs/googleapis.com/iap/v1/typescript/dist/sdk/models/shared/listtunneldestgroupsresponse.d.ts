import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelDestGroup } from "./tunneldestgroup";
/**
 * The response from ListTunnelDestGroups.
**/
export declare class ListTunnelDestGroupsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tunnelDestGroups?: TunnelDestGroup[];
}
