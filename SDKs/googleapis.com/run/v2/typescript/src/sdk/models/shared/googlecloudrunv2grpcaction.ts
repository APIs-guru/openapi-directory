import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2GrpcAction
/** 
 * GRPCAction describes an action involving a GRPC port.
**/
export class GoogleCloudRunV2GrpcAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
