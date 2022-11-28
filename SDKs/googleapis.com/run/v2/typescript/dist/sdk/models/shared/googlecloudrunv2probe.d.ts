import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2GrpcAction } from "./googlecloudrunv2grpcaction";
import { GoogleCloudRunV2HttpGetAction } from "./googlecloudrunv2httpgetaction";
import { GoogleCloudRunV2TcpSocketAction } from "./googlecloudrunv2tcpsocketaction";
/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
export declare class GoogleCloudRunV2Probe extends SpeakeasyBase {
    failureThreshold?: number;
    grpc?: GoogleCloudRunV2GrpcAction;
    httpGet?: GoogleCloudRunV2HttpGetAction;
    initialDelaySeconds?: number;
    periodSeconds?: number;
    tcpSocket?: GoogleCloudRunV2TcpSocketAction;
    timeoutSeconds?: number;
}
