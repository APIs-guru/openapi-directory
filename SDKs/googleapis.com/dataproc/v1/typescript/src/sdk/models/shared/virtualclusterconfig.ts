import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuxiliaryServicesConfig } from "./auxiliaryservicesconfig";
import { KubernetesClusterConfig } from "./kubernetesclusterconfig";


// VirtualClusterConfig
/** 
 * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke).
**/
export class VirtualClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryServicesConfig" })
  auxiliaryServicesConfig?: AuxiliaryServicesConfig;

  @Metadata({ data: "json, name=kubernetesClusterConfig" })
  kubernetesClusterConfig?: KubernetesClusterConfig;

  @Metadata({ data: "json, name=stagingBucket" })
  stagingBucket?: string;
}
