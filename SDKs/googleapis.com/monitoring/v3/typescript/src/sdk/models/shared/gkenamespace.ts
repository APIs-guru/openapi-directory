import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeNamespace
/** 
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
**/
export class GkeNamespace extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
