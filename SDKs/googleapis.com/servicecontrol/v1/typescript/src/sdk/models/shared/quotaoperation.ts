import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValueSet } from "./metricvalueset";


export enum QuotaOperationQuotaModeEnum {
    Unspecified = "UNSPECIFIED",
    Normal = "NORMAL",
    BestEffort = "BEST_EFFORT",
    CheckOnly = "CHECK_ONLY",
    AdjustOnly = "ADJUST_ONLY"
}


// QuotaOperation
/** 
 * Represents information regarding a quota operation.
**/
export class QuotaOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerId" })
  consumerId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=methodName" })
  methodName?: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaMetrics", elemType: MetricValueSet })
  quotaMetrics?: MetricValueSet[];

  @SpeakeasyMetadata({ data: "json, name=quotaMode" })
  quotaMode?: QuotaOperationQuotaModeEnum;
}
