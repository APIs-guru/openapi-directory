import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * ListConnectionsResponse is the response to list peering states for the given service and consumer project.
**/
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connections?: Connection[];
}
