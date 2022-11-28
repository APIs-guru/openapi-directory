import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecAction } from "./execaction";
import { GrpcAction } from "./grpcaction";
import { HttpGetAction } from "./httpgetaction";
import { TcpSocketAction } from "./tcpsocketaction";



// Probe
/** 
 * Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
export class Probe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exec" })
  exec?: ExecAction;

  @SpeakeasyMetadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=grpc" })
  grpc?: GrpcAction;

  @SpeakeasyMetadata({ data: "json, name=httpGet" })
  httpGet?: HttpGetAction;

  @SpeakeasyMetadata({ data: "json, name=initialDelaySeconds" })
  initialDelaySeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=periodSeconds" })
  periodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=successThreshold" })
  successThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=tcpSocket" })
  tcpSocket?: TcpSocketAction;

  @SpeakeasyMetadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;
}
