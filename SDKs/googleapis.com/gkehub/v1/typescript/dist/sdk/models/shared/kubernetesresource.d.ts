import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceManifest } from "./resourcemanifest";
import { ResourceOptions } from "./resourceoptions";
/**
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
export declare class KubernetesResource extends SpeakeasyBase {
    connectResources?: ResourceManifest[];
    membershipCrManifest?: string;
    membershipResources?: ResourceManifest[];
    resourceOptions?: ResourceOptions;
}
/**
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
export declare class KubernetesResourceInput extends SpeakeasyBase {
    membershipCrManifest?: string;
    resourceOptions?: ResourceOptions;
}
