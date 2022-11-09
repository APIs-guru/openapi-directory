import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrpcRoute } from "./grpcroute";


// ListGrpcRoutesResponse
/** 
 * Response returned by the ListGrpcRoutes method.
**/
export class ListGrpcRoutesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpcRoutes", elemType: shared.GrpcRoute })
  grpcRoutes?: GrpcRoute[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
