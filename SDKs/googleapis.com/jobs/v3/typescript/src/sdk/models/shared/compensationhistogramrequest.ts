import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericBucketingOption } from "./numericbucketingoption";

export enum CompensationHistogramRequestTypeEnum {
    CompensationHistogramRequestTypeUnspecified = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
,    Base = "BASE"
,    AnnualizedBase = "ANNUALIZED_BASE"
,    AnnualizedTotal = "ANNUALIZED_TOTAL"
}


// CompensationHistogramRequest
/** 
 * Input only. Compensation based histogram request.
**/
export class CompensationHistogramRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketingOption" })
  bucketingOption?: NumericBucketingOption;

  @Metadata({ data: "json, name=type" })
  type?: CompensationHistogramRequestTypeEnum;
}
