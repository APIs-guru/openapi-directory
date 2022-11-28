import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceOptions } from "./resourceoptions";
import { ResourceManifest } from "./resourcemanifest";



// KubernetesResourceInput
/** 
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
export class KubernetesResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membershipCrManifest" })
  membershipCrManifest?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOptions" })
  resourceOptions?: ResourceOptions;
}


// KubernetesResource
/** 
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
export class KubernetesResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectResources", elemType: ResourceManifest })
  connectResources?: ResourceManifest[];

  @SpeakeasyMetadata({ data: "json, name=membershipCrManifest" })
  membershipCrManifest?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipResources", elemType: ResourceManifest })
  membershipResources?: ResourceManifest[];

  @SpeakeasyMetadata({ data: "json, name=resourceOptions" })
  resourceOptions?: ResourceOptions;
}
