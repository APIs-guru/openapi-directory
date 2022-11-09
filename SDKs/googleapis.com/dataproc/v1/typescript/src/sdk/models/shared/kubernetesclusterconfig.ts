import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { KubernetesSoftwareConfig } from "./kubernetessoftwareconfig";


// KubernetesClusterConfig
/** 
 * The configuration for running the Dataproc cluster on Kubernetes.
**/
export class KubernetesClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gkeClusterConfig" })
  gkeClusterConfig?: GkeClusterConfig;

  @Metadata({ data: "json, name=kubernetesNamespace" })
  kubernetesNamespace?: string;

  @Metadata({ data: "json, name=kubernetesSoftwareConfig" })
  kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
}
