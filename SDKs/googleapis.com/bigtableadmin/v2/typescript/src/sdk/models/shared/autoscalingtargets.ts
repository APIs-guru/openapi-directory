import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoscalingTargets
/** 
 * The Autoscaling targets for a Cluster. These determine the recommended nodes.
**/
export class AutoscalingTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercent" })
  cpuUtilizationPercent?: number;

  @Metadata({ data: "json, name=storageUtilizationGibPerNode" })
  storageUtilizationGibPerNode?: number;
}
