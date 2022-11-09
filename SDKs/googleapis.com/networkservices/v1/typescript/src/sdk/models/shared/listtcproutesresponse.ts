import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TcpRoute } from "./tcproute";


// ListTcpRoutesResponse
/** 
 * Response returned by the ListTcpRoutes method.
**/
export class ListTcpRoutesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tcpRoutes", elemType: shared.TcpRoute })
  tcpRoutes?: TcpRoute[];
}
