import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkStandaloneAutoscalingConfig
/** 
 * Basic autoscaling configurations for Spark Standalone.
**/
export class SparkStandaloneAutoscalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gracefulDecommissionTimeout" })
  gracefulDecommissionTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=scaleDownFactor" })
  scaleDownFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=scaleDownMinWorkerFraction" })
  scaleDownMinWorkerFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=scaleUpFactor" })
  scaleUpFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=scaleUpMinWorkerFraction" })
  scaleUpMinWorkerFraction?: number;
}
