import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core).
**/
export declare class GoogleCloudMlV1EnvVar extends SpeakeasyBase {
    name?: string;
    value?: string;
}
