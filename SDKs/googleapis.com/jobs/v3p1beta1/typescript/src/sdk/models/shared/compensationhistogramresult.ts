import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingResult } from "./numericbucketingresult";


export enum CompensationHistogramResultTypeEnum {
    CompensationHistogramRequestTypeUnspecified = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED",
    Base = "BASE",
    AnnualizedBase = "ANNUALIZED_BASE",
    AnnualizedTotal = "ANNUALIZED_TOTAL"
}


// CompensationHistogramResult
/** 
 * Output only. Compensation based histogram result.
**/
export class CompensationHistogramResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: NumericBucketingResult;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CompensationHistogramResultTypeEnum;
}
