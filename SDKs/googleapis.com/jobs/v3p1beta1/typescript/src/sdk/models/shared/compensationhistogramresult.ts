import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericBucketingResult } from "./numericbucketingresult";

export enum CompensationHistogramResultTypeEnum {
    CompensationHistogramRequestTypeUnspecified = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
,    Base = "BASE"
,    AnnualizedBase = "ANNUALIZED_BASE"
,    AnnualizedTotal = "ANNUALIZED_TOTAL"
}


// CompensationHistogramResult
/** 
 * Output only. Compensation based histogram result.
**/
export class CompensationHistogramResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: NumericBucketingResult;

  @Metadata({ data: "json, name=type" })
  type?: CompensationHistogramResultTypeEnum;
}
