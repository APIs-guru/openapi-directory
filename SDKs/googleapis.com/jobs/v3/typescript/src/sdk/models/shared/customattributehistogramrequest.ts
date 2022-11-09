import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericBucketingOption } from "./numericbucketingoption";


// CustomAttributeHistogramRequest
/** 
 * Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
**/
export class CustomAttributeHistogramRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=longValueHistogramBucketingOption" })
  longValueHistogramBucketingOption?: NumericBucketingOption;

  @Metadata({ data: "json, name=stringValueHistogram" })
  stringValueHistogram?: boolean;
}
