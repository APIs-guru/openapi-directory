import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoscalingTargets
/** 
 * The Autoscaling targets for a Cluster. These determine the recommended nodes.
**/
export class AutoscalingTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercent" })
  cpuUtilizationPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=storageUtilizationGibPerNode" })
  storageUtilizationGibPerNode?: number;
}
