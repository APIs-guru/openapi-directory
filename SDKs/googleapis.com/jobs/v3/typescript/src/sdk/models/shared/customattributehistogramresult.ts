import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericBucketingResult } from "./numericbucketingresult";


// CustomAttributeHistogramResult
/** 
 * Output only. Custom attribute histogram result.
**/
export class CustomAttributeHistogramResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=longValueHistogramResult" })
  longValueHistogramResult?: NumericBucketingResult;

  @Metadata({ data: "json, name=stringValueHistogramResult" })
  stringValueHistogramResult?: Map<string, number>;
}
