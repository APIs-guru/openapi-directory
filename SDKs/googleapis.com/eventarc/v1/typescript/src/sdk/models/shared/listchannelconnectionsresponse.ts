import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelConnection } from "./channelconnection";


// ListChannelConnectionsResponse
/** 
 * The response message for the `ListChannelConnections` method.
**/
export class ListChannelConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelConnections", elemType: shared.ChannelConnection })
  channelConnections?: ChannelConnection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
