import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KubernetesMetadata
/** 
 * KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
**/
export class KubernetesMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kubernetesApiServerVersion" })
  kubernetesApiServerVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryMb" })
  memoryMb?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeProviderId" })
  nodeProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vcpuCount" })
  vcpuCount?: number;
}
