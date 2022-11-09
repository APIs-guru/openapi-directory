import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkStandaloneAutoscalingConfig
/** 
 * Basic autoscaling configurations for Spark Standalone.
**/
export class SparkStandaloneAutoscalingConfig extends SpeakeasyBase {
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
