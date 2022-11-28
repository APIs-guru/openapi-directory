import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaError } from "./quotaerror";
import { AllocateInfo } from "./allocateinfo";
import { MetricValueSet } from "./metricvalueset";



// AllocateQuotaResponse
/** 
 * Response message for the AllocateQuota method.
**/
export class AllocateQuotaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocateErrors", elemType: QuotaError })
  allocateErrors?: QuotaError[];

  @SpeakeasyMetadata({ data: "json, name=allocateInfo" })
  allocateInfo?: AllocateInfo;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaMetrics", elemType: MetricValueSet })
  quotaMetrics?: MetricValueSet[];

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
