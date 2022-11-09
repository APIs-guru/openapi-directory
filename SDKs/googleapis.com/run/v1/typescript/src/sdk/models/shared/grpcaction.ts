import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrpcAction
/** 
 * GRPCAction describes an action involving a GRPC port.
**/
export class GrpcAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
