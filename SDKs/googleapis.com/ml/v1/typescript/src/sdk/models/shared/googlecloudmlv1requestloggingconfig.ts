import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1RequestLoggingConfig
/** 
 * Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs.
**/
export class GoogleCloudMlV1RequestLoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryTableName" })
  bigqueryTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=samplingPercentage" })
  samplingPercentage?: number;
}
