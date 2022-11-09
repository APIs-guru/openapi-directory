import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClusterIstio
/** 
 * Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
**/
export class ClusterIstio extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=serviceNamespace" })
  serviceNamespace?: string;
}
