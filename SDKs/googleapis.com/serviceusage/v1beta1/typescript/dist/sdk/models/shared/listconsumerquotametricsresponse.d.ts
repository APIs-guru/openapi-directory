import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerQuotaMetric } from "./consumerquotametric";
/**
 * Response message for ListConsumerQuotaMetrics
**/
export declare class ListConsumerQuotaMetricsResponse extends SpeakeasyBase {
    metrics?: ConsumerQuotaMetric[];
    nextPageToken?: string;
}
