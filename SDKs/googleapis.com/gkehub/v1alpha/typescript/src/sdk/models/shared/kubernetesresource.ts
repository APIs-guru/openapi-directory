import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceManifest } from "./resourcemanifest";
import { ResourceManifest } from "./resourcemanifest";
import { ResourceOptions } from "./resourceoptions";


// KubernetesResource
/** 
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
export class KubernetesResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectResources", elemType: shared.ResourceManifest })
  connectResources?: ResourceManifest[];

  @Metadata({ data: "json, name=membershipCrManifest" })
  membershipCrManifest?: string;

  @Metadata({ data: "json, name=membershipResources", elemType: shared.ResourceManifest })
  membershipResources?: ResourceManifest[];

  @Metadata({ data: "json, name=resourceOptions" })
  resourceOptions?: ResourceOptions;
}
