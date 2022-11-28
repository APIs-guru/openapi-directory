import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrpcAction
/** 
 * GRPCAction describes an action involving a GRPC port.
**/
export class GrpcAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
