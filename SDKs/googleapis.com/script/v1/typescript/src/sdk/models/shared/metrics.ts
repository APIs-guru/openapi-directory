import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricsValue } from "./metricsvalue";
import { MetricsValue } from "./metricsvalue";
import { MetricsValue } from "./metricsvalue";


// Metrics
/** 
 * Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
**/
export class Metrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeUsers", elemType: shared.MetricsValue })
  activeUsers?: MetricsValue[];

  @Metadata({ data: "json, name=failedExecutions", elemType: shared.MetricsValue })
  failedExecutions?: MetricsValue[];

  @Metadata({ data: "json, name=totalExecutions", elemType: shared.MetricsValue })
  totalExecutions?: MetricsValue[];
}
