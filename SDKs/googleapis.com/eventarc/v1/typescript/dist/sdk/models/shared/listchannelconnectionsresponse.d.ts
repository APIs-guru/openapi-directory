import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelConnection } from "./channelconnection";
/**
 * The response message for the `ListChannelConnections` method.
**/
export declare class ListChannelConnectionsResponse extends SpeakeasyBase {
    channelConnections?: ChannelConnection[];
    nextPageToken?: string;
    unreachable?: string[];
}
