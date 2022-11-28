import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { KubernetesSoftwareConfig } from "./kubernetessoftwareconfig";



// KubernetesClusterConfig
/** 
 * The configuration for running the Dataproc cluster on Kubernetes.
**/
export class KubernetesClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gkeClusterConfig" })
  gkeClusterConfig?: GkeClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=kubernetesNamespace" })
  kubernetesNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=kubernetesSoftwareConfig" })
  kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
}
