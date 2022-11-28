import { SpeakeasyBase } from "../../../internal/utils";
import { TlsRoute } from "./tlsroute";
/**
 * Response returned by the ListTlsRoutes method.
**/
export declare class ListTlsRoutesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tlsRoutes?: TlsRoute[];
}
