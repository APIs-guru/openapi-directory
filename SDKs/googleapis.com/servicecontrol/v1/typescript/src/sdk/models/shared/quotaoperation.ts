import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricValueSet } from "./metricvalueset";

export enum QuotaOperationQuotaModeEnum {
    Unspecified = "UNSPECIFIED"
,    Normal = "NORMAL"
,    BestEffort = "BEST_EFFORT"
,    CheckOnly = "CHECK_ONLY"
,    AdjustOnly = "ADJUST_ONLY"
}


// QuotaOperation
/** 
 * Represents information regarding a quota operation.
**/
export class QuotaOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerId" })
  consumerId?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=methodName" })
  methodName?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=quotaMetrics", elemType: shared.MetricValueSet })
  quotaMetrics?: MetricValueSet[];

  @Metadata({ data: "json, name=quotaMode" })
  quotaMode?: QuotaOperationQuotaModeEnum;
}
