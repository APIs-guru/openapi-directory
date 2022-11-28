import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRoute } from "./grpcroute";



// ListGrpcRoutesResponse
/** 
 * Response returned by the ListGrpcRoutes method.
**/
export class ListGrpcRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpcRoutes", elemType: GrpcRoute })
  grpcRoutes?: GrpcRoute[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
