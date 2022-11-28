import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateConnection } from "./privateconnection";
export declare class ListPrivateConnectionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    privateConnections?: PrivateConnection[];
    unreachable?: string[];
}
