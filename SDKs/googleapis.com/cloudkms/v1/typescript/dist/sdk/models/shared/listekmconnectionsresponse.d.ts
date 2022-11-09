import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EkmConnection } from "./ekmconnection";
/**
 * Response message for EkmService.ListEkmConnections.
**/
export declare class ListEkmConnectionsResponse extends SpeakeasyBase {
    ekmConnections?: EkmConnection[];
    nextPageToken?: string;
    totalSize?: number;
}
