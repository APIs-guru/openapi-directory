import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalNode } from "./sasportalnode";
/**
 * Response for ListNodes.
**/
export declare class SasPortalListNodesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    nodes?: SasPortalNode[];
}
