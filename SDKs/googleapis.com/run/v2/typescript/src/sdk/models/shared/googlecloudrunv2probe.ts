import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2GrpcAction } from "./googlecloudrunv2grpcaction";
import { GoogleCloudRunV2HttpGetAction } from "./googlecloudrunv2httpgetaction";
import { GoogleCloudRunV2TcpSocketAction } from "./googlecloudrunv2tcpsocketaction";



// GoogleCloudRunV2Probe
/** 
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
**/
export class GoogleCloudRunV2Probe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=grpc" })
  grpc?: GoogleCloudRunV2GrpcAction;

  @SpeakeasyMetadata({ data: "json, name=httpGet" })
  httpGet?: GoogleCloudRunV2HttpGetAction;

  @SpeakeasyMetadata({ data: "json, name=initialDelaySeconds" })
  initialDelaySeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=periodSeconds" })
  periodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=tcpSocket" })
  tcpSocket?: GoogleCloudRunV2TcpSocketAction;

  @SpeakeasyMetadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;
}
