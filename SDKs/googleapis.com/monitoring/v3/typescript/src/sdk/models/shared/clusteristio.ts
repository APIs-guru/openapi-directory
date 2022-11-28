import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterIstio
/** 
 * Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
**/
export class ClusterIstio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceNamespace" })
  serviceNamespace?: string;
}
