import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1EnvVar
/** 
 * Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core).
**/
export class GoogleCloudMlV1EnvVar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
