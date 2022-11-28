import { SpeakeasyBase } from "../../../internal/utils";
/**
 * KubernetesMetadata provides informational metadata for Memberships that are created from Kubernetes Endpoints (currently, these are equivalent to Kubernetes clusters).
**/
export declare class KubernetesMetadata extends SpeakeasyBase {
    kubernetesApiServerVersion?: string;
    memoryMb?: number;
    nodeCount?: number;
    nodeProviderId?: string;
    updateTime?: string;
    vcpuCount?: number;
}
