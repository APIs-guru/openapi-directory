import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumerQuotaMetric } from "./consumerquotametric";


// ListConsumerQuotaMetricsResponse
/** 
 * Response message for ListConsumerQuotaMetrics
**/
export class ListConsumerQuotaMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.ConsumerQuotaMetric })
  metrics?: ConsumerQuotaMetric[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
