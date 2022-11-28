import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingOption } from "./numericbucketingoption";
/**
 * Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
**/
export declare class CustomAttributeHistogramRequest extends SpeakeasyBase {
    key?: string;
    longValueHistogramBucketingOption?: NumericBucketingOption;
    stringValueHistogram?: boolean;
}
