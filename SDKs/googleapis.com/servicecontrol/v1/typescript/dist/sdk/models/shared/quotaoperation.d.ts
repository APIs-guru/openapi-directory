import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValueSet } from "./metricvalueset";
export declare enum QuotaOperationQuotaModeEnum {
    Unspecified = "UNSPECIFIED",
    Normal = "NORMAL",
    BestEffort = "BEST_EFFORT",
    CheckOnly = "CHECK_ONLY",
    AdjustOnly = "ADJUST_ONLY"
}
/**
 * Represents information regarding a quota operation.
**/
export declare class QuotaOperation extends SpeakeasyBase {
    consumerId?: string;
    labels?: Map<string, string>;
    methodName?: string;
    operationId?: string;
    quotaMetrics?: MetricValueSet[];
    quotaMode?: QuotaOperationQuotaModeEnum;
}
