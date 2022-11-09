import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeWorkload
/** 
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
export class GkeWorkload extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=topLevelControllerName" })
  topLevelControllerName?: string;

  @Metadata({ data: "json, name=topLevelControllerType" })
  topLevelControllerType?: string;
}
