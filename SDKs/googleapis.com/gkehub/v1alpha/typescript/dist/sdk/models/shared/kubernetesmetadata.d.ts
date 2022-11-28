import { SpeakeasyBase } from "../../../internal/utils";
/**
 * KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
**/
export declare class KubernetesMetadata extends SpeakeasyBase {
    kubernetesApiServerVersion?: string;
    memoryMb?: number;
    nodeCount?: number;
    nodeProviderId?: string;
    updateTime?: string;
    vcpuCount?: number;
}
