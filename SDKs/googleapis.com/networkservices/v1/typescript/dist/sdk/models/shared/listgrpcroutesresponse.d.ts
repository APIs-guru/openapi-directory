import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRoute } from "./grpcroute";
/**
 * Response returned by the ListGrpcRoutes method.
**/
export declare class ListGrpcRoutesResponse extends SpeakeasyBase {
    grpcRoutes?: GrpcRoute[];
    nextPageToken?: string;
}
