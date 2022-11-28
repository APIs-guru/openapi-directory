import { SpeakeasyBase } from "../../../internal/utils";
import { ExecAction } from "./execaction";
import { GrpcAction } from "./grpcaction";
import { HttpGetAction } from "./httpgetaction";
import { TcpSocketAction } from "./tcpsocketaction";
/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
export declare class Probe extends SpeakeasyBase {
    exec?: ExecAction;
    failureThreshold?: number;
    grpc?: GrpcAction;
    httpGet?: HttpGetAction;
    initialDelaySeconds?: number;
    periodSeconds?: number;
    successThreshold?: number;
    tcpSocket?: TcpSocketAction;
    timeoutSeconds?: number;
}
