import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TcpRoute } from "./tcproute";



// ListTcpRoutesResponse
/** 
 * Response returned by the ListTcpRoutes method.
**/
export class ListTcpRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tcpRoutes", elemType: TcpRoute })
  tcpRoutes?: TcpRoute[];
}
