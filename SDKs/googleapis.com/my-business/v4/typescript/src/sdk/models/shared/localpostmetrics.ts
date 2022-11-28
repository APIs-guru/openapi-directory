import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";



// LocalPostMetrics
/** 
 * All the metrics requested for a Local Post.
**/
export class LocalPostMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localPostName" })
  localPostName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: MetricValue })
  metricValues?: MetricValue[];
}
