import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingOption } from "./numericbucketingoption";



// CustomAttributeHistogramRequest
/** 
 * Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
**/
export class CustomAttributeHistogramRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=longValueHistogramBucketingOption" })
  longValueHistogramBucketingOption?: NumericBucketingOption;

  @SpeakeasyMetadata({ data: "json, name=stringValueHistogram" })
  stringValueHistogram?: boolean;
}
