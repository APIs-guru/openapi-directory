import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelConnection } from "./channelconnection";



// ListChannelConnectionsResponse
/** 
 * The response message for the `ListChannelConnections` method.
**/
export class ListChannelConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelConnections", elemType: ChannelConnection })
  channelConnections?: ChannelConnection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
