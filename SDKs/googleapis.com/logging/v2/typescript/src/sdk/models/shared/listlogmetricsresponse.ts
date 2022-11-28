import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogMetric } from "./logmetric";



// ListLogMetricsResponse
/** 
 * Result returned from ListLogMetrics.
**/
export class ListLogMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: LogMetric })
  metrics?: LogMetric[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
