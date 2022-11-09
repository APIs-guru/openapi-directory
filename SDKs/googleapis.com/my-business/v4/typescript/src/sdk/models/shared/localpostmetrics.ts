import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricValue } from "./metricvalue";


// LocalPostMetrics
/** 
 * All the metrics requested for a Local Post.
**/
export class LocalPostMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=localPostName" })
  localPostName?: string;

  @Metadata({ data: "json, name=metricValues", elemType: shared.MetricValue })
  metricValues?: MetricValue[];
}
