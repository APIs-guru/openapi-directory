import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudNetworksecurityV1beta1GrpcEndpoint
/** 
 * Specification of the GRPC Endpoint.
**/
export class GoogleCloudNetworksecurityV1beta1GrpcEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetUri" })
  targetUri?: string;
}
