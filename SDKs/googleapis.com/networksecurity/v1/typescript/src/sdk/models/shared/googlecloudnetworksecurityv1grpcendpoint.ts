import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudNetworksecurityV1GrpcEndpoint
/** 
 * Specification of the GRPC Endpoint.
**/
export class GoogleCloudNetworksecurityV1GrpcEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetUri" })
  targetUri?: string;
}
