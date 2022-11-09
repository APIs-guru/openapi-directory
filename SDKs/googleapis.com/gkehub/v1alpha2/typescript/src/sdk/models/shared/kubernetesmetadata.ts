import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KubernetesMetadata
/** 
 * KubernetesMetadata provides informational metadata for Memberships that are created from Kubernetes Endpoints (currently, these are equivalent to Kubernetes clusters).
**/
export class KubernetesMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=kubernetesApiServerVersion" })
  kubernetesApiServerVersion?: string;

  @Metadata({ data: "json, name=memoryMb" })
  memoryMb?: number;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @Metadata({ data: "json, name=nodeProviderId" })
  nodeProviderId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vcpuCount" })
  vcpuCount?: number;
}
