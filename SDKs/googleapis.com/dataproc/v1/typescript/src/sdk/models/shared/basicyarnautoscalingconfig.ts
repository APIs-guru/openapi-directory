import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BasicYarnAutoscalingConfig
/** 
 * Basic autoscaling configurations for YARN.
**/
export class BasicYarnAutoscalingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gracefulDecommissionTimeout" })
  gracefulDecommissionTimeout?: string;

  @Metadata({ data: "json, name=scaleDownFactor" })
  scaleDownFactor?: number;

  @Metadata({ data: "json, name=scaleDownMinWorkerFraction" })
  scaleDownMinWorkerFraction?: number;

  @Metadata({ data: "json, name=scaleUpFactor" })
  scaleUpFactor?: number;

  @Metadata({ data: "json, name=scaleUpMinWorkerFraction" })
  scaleUpMinWorkerFraction?: number;
}
