import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudNetworksecurityV1GrpcEndpoint
/** 
 * Specification of the GRPC Endpoint.
**/
export class GoogleCloudNetworksecurityV1GrpcEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetUri" })
  targetUri?: string;
}
