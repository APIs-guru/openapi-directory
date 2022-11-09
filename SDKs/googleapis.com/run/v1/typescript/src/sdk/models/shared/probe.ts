import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecAction } from "./execaction";
import { GrpcAction } from "./grpcaction";
import { HttpGetAction } from "./httpgetaction";
import { TcpSocketAction } from "./tcpsocketaction";


// Probe
/** 
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
export class Probe extends SpeakeasyBase {
  @Metadata({ data: "json, name=exec" })
  exec?: ExecAction;

  @Metadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @Metadata({ data: "json, name=grpc" })
  grpc?: GrpcAction;

  @Metadata({ data: "json, name=httpGet" })
  httpGet?: HttpGetAction;

  @Metadata({ data: "json, name=initialDelaySeconds" })
  initialDelaySeconds?: number;

  @Metadata({ data: "json, name=periodSeconds" })
  periodSeconds?: number;

  @Metadata({ data: "json, name=successThreshold" })
  successThreshold?: number;

  @Metadata({ data: "json, name=tcpSocket" })
  tcpSocket?: TcpSocketAction;

  @Metadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;
}
