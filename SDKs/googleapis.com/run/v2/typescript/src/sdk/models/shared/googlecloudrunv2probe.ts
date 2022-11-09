import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRunV2GrpcAction } from "./googlecloudrunv2grpcaction";
import { GoogleCloudRunV2HttpGetAction } from "./googlecloudrunv2httpgetaction";
import { GoogleCloudRunV2TcpSocketAction } from "./googlecloudrunv2tcpsocketaction";


// GoogleCloudRunV2Probe
/** 
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
export class GoogleCloudRunV2Probe extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @Metadata({ data: "json, name=grpc" })
  grpc?: GoogleCloudRunV2GrpcAction;

  @Metadata({ data: "json, name=httpGet" })
  httpGet?: GoogleCloudRunV2HttpGetAction;

  @Metadata({ data: "json, name=initialDelaySeconds" })
  initialDelaySeconds?: number;

  @Metadata({ data: "json, name=periodSeconds" })
  periodSeconds?: number;

  @Metadata({ data: "json, name=tcpSocket" })
  tcpSocket?: GoogleCloudRunV2TcpSocketAction;

  @Metadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;
}
