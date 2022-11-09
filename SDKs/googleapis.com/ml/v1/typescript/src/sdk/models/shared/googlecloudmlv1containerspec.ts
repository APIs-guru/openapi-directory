import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1EnvVar } from "./googlecloudmlv1envvar";
import { GoogleCloudMlV1ContainerPort } from "./googlecloudmlv1containerport";


// GoogleCloudMlV1ContainerSpec
/** 
 * Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
**/
export class GoogleCloudMlV1ContainerSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=env", elemType: shared.GoogleCloudMlV1EnvVar })
  env?: GoogleCloudMlV1EnvVar[];

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=ports", elemType: shared.GoogleCloudMlV1ContainerPort })
  ports?: GoogleCloudMlV1ContainerPort[];
}
