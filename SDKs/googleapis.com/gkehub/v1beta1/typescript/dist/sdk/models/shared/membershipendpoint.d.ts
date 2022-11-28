import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
export declare class MembershipEndpoint extends SpeakeasyBase {
    applianceCluster?: ApplianceCluster;
    edgeCluster?: EdgeCluster;
    gkeCluster?: GkeCluster;
    kubernetesMetadata?: KubernetesMetadata;
    kubernetesResource?: KubernetesResource;
    multiCloudCluster?: MultiCloudCluster;
    onPremCluster?: OnPremCluster;
}
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
export declare class MembershipEndpointInput extends SpeakeasyBase {
    applianceCluster?: ApplianceCluster;
    edgeCluster?: EdgeCluster;
    gkeCluster?: GkeClusterInput;
    kubernetesResource?: KubernetesResourceInput;
    multiCloudCluster?: MultiCloudClusterInput;
    onPremCluster?: OnPremClusterInput;
}
