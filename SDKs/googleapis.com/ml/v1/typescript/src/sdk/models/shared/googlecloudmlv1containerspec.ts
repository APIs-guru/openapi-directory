import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1EnvVar } from "./googlecloudmlv1envvar";
import { GoogleCloudMlV1ContainerPort } from "./googlecloudmlv1containerport";



// GoogleCloudMlV1ContainerSpec
/** 
 * Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
**/
export class GoogleCloudMlV1ContainerSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=env", elemType: GoogleCloudMlV1EnvVar })
  env?: GoogleCloudMlV1EnvVar[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=ports", elemType: GoogleCloudMlV1ContainerPort })
  ports?: GoogleCloudMlV1ContainerPort[];
}
