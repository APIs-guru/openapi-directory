import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerQuotaMetric } from "./consumerquotametric";



// ListConsumerQuotaMetricsResponse
/** 
 * Response message for ListConsumerQuotaMetrics
**/
export class ListConsumerQuotaMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: ConsumerQuotaMetric })
  metrics?: ConsumerQuotaMetric[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
