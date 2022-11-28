import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerQuotaLimit } from "./consumerquotalimit";
/**
 * Consumer quota settings for a quota metric.
**/
export declare class ConsumerQuotaMetric extends SpeakeasyBase {
    consumerQuotaLimits?: ConsumerQuotaLimit[];
    descendantConsumerQuotaLimits?: ConsumerQuotaLimit[];
    displayName?: string;
    metric?: string;
    name?: string;
    unit?: string;
}
