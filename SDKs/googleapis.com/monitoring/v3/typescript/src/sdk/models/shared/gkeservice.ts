import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeService
/** 
 * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
**/
export class GkeService extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
