import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";



// JobMetrics
/** 
 * JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.
**/
export class JobMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricTime" })
  metricTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricUpdate })
  metrics?: MetricUpdate[];
}
