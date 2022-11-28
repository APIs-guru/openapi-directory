import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsValue } from "./metricsvalue";



// Metrics
/** 
 * Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
**/
export class Metrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeUsers", elemType: MetricsValue })
  activeUsers?: MetricsValue[];

  @SpeakeasyMetadata({ data: "json, name=failedExecutions", elemType: MetricsValue })
  failedExecutions?: MetricsValue[];

  @SpeakeasyMetadata({ data: "json, name=totalExecutions", elemType: MetricsValue })
  totalExecutions?: MetricsValue[];
}
