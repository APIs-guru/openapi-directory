import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceOptions represent options for Kubernetes resource generation.
**/
export declare class ResourceOptions extends SpeakeasyBase {
    connectVersion?: string;
    k8sVersion?: string;
    v1beta1Crd?: boolean;
}
