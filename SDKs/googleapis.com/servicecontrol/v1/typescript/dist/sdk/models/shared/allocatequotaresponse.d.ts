import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaError } from "./quotaerror";
import { AllocateInfo } from "./allocateinfo";
import { MetricValueSet } from "./metricvalueset";
/**
 * Response message for the AllocateQuota method.
**/
export declare class AllocateQuotaResponse extends SpeakeasyBase {
    allocateErrors?: QuotaError[];
    allocateInfo?: AllocateInfo;
    operationId?: string;
    quotaMetrics?: MetricValueSet[];
    serviceConfigId?: string;
}
