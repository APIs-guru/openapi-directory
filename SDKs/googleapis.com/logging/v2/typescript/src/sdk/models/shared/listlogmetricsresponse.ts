import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogMetric } from "./logmetric";


// ListLogMetricsResponse
/** 
 * Result returned from ListLogMetrics.
**/
export class ListLogMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.LogMetric })
  metrics?: LogMetric[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
