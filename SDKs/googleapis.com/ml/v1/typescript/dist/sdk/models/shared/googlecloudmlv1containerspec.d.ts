import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1EnvVar } from "./googlecloudmlv1envvar";
import { GoogleCloudMlV1ContainerPort } from "./googlecloudmlv1containerport";
/**
 * Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
**/
export declare class GoogleCloudMlV1ContainerSpec extends SpeakeasyBase {
    args?: string[];
    command?: string[];
    env?: GoogleCloudMlV1EnvVar[];
    image?: string;
    ports?: GoogleCloudMlV1ContainerPort[];
}
