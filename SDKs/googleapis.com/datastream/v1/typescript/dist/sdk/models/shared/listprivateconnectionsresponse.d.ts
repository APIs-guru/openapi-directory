import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateConnection } from "./privateconnection";
/**
 * Response containing a list of private connection configurations.
**/
export declare class ListPrivateConnectionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    privateConnections?: PrivateConnection[];
    unreachable?: string[];
}
