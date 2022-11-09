import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrivateConnection } from "./privateconnection";


export class ListPrivateConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=privateConnections", elemType: shared.PrivateConnection })
  privateConnections?: PrivateConnection[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
