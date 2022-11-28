import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingOption } from "./numericbucketingoption";
export declare enum CompensationHistogramRequestTypeEnum {
    CompensationHistogramRequestTypeUnspecified = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED",
    Base = "BASE",
    AnnualizedBase = "ANNUALIZED_BASE",
    AnnualizedTotal = "ANNUALIZED_TOTAL"
}
/**
 * Input only. Compensation based histogram request.
**/
export declare class CompensationHistogramRequest extends SpeakeasyBase {
    bucketingOption?: NumericBucketingOption;
    type?: CompensationHistogramRequestTypeEnum;
}
