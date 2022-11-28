import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplianceCluster } from "./appliancecluster";
import { EdgeCluster } from "./edgecluster";
import { GkeCluster } from "./gkecluster";
import { KubernetesMetadata } from "./kubernetesmetadata";
import { KubernetesResource } from "./kubernetesresource";
import { MultiCloudCluster } from "./multicloudcluster";
import { OnPremCluster } from "./onpremcluster";
import { GkeClusterInput } from "./gkecluster";
import { KubernetesResourceInput } from "./kubernetesresource";
import { MultiCloudClusterInput } from "./multicloudcluster";
import { OnPremClusterInput } from "./onpremcluster";



// MembershipEndpoint
/** 
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
export class MembershipEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applianceCluster" })
  applianceCluster?: ApplianceCluster;

  @SpeakeasyMetadata({ data: "json, name=edgeCluster" })
  edgeCluster?: EdgeCluster;

  @SpeakeasyMetadata({ data: "json, name=gkeCluster" })
  gkeCluster?: GkeCluster;

  @SpeakeasyMetadata({ data: "json, name=kubernetesMetadata" })
  kubernetesMetadata?: KubernetesMetadata;

  @SpeakeasyMetadata({ data: "json, name=kubernetesResource" })
  kubernetesResource?: KubernetesResource;

  @SpeakeasyMetadata({ data: "json, name=multiCloudCluster" })
  multiCloudCluster?: MultiCloudCluster;

  @SpeakeasyMetadata({ data: "json, name=onPremCluster" })
  onPremCluster?: OnPremCluster;
}


// MembershipEndpointInput
/** 
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
export class MembershipEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applianceCluster" })
  applianceCluster?: ApplianceCluster;

  @SpeakeasyMetadata({ data: "json, name=edgeCluster" })
  edgeCluster?: EdgeCluster;

  @SpeakeasyMetadata({ data: "json, name=gkeCluster" })
  gkeCluster?: GkeClusterInput;

  @SpeakeasyMetadata({ data: "json, name=kubernetesResource" })
  kubernetesResource?: KubernetesResourceInput;

  @SpeakeasyMetadata({ data: "json, name=multiCloudCluster" })
  multiCloudCluster?: MultiCloudClusterInput;

  @SpeakeasyMetadata({ data: "json, name=onPremCluster" })
  onPremCluster?: OnPremClusterInput;
}
