import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateConnection } from "./privateconnection";



export class ListPrivateConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=privateConnections", elemType: PrivateConnection })
  privateConnections?: PrivateConnection[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
