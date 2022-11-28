import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeWorkload
/** 
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
export class GkeWorkload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=topLevelControllerName" })
  topLevelControllerName?: string;

  @SpeakeasyMetadata({ data: "json, name=topLevelControllerType" })
  topLevelControllerType?: string;
}


// GkeWorkloadInput
/** 
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
export class GkeWorkloadInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=topLevelControllerName" })
  topLevelControllerName?: string;

  @SpeakeasyMetadata({ data: "json, name=topLevelControllerType" })
  topLevelControllerType?: string;
}
