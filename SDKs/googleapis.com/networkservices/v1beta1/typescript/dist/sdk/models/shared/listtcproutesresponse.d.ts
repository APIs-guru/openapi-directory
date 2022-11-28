import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRoute } from "./tcproute";
/**
 * Response returned by the ListTcpRoutes method.
**/
export declare class ListTcpRoutesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tcpRoutes?: TcpRoute[];
}
