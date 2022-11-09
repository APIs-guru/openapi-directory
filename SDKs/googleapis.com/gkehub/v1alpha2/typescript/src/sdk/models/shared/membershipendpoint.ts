import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplianceCluster } from "./appliancecluster";
import { EdgeCluster } from "./edgecluster";
import { GkeCluster } from "./gkecluster";
import { KubernetesMetadata } from "./kubernetesmetadata";
import { KubernetesResource } from "./kubernetesresource";
import { MultiCloudCluster } from "./multicloudcluster";
import { OnPremCluster } from "./onpremcluster";


// MembershipEndpoint
/** 
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
export class MembershipEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=applianceCluster" })
  applianceCluster?: ApplianceCluster;

  @Metadata({ data: "json, name=edgeCluster" })
  edgeCluster?: EdgeCluster;

  @Metadata({ data: "json, name=gkeCluster" })
  gkeCluster?: GkeCluster;

  @Metadata({ data: "json, name=kubernetesMetadata" })
  kubernetesMetadata?: KubernetesMetadata;

  @Metadata({ data: "json, name=kubernetesResource" })
  kubernetesResource?: KubernetesResource;

  @Metadata({ data: "json, name=multiCloudCluster" })
  multiCloudCluster?: MultiCloudCluster;

  @Metadata({ data: "json, name=onPremCluster" })
  onPremCluster?: OnPremCluster;
}
