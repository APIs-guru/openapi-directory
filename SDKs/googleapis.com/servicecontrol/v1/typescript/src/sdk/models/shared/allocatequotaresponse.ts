import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuotaError } from "./quotaerror";
import { AllocateInfo } from "./allocateinfo";
import { MetricValueSet } from "./metricvalueset";


// AllocateQuotaResponse
/** 
 * Response message for the AllocateQuota method.
**/
export class AllocateQuotaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocateErrors", elemType: shared.QuotaError })
  allocateErrors?: QuotaError[];

  @Metadata({ data: "json, name=allocateInfo" })
  allocateInfo?: AllocateInfo;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=quotaMetrics", elemType: shared.MetricValueSet })
  quotaMetrics?: MetricValueSet[];

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
