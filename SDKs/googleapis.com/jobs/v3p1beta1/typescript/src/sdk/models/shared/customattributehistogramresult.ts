import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingResult } from "./numericbucketingresult";



// CustomAttributeHistogramResult
/** 
 * Output only. Custom attribute histogram result.
**/
export class CustomAttributeHistogramResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=longValueHistogramResult" })
  longValueHistogramResult?: NumericBucketingResult;

  @SpeakeasyMetadata({ data: "json, name=stringValueHistogramResult" })
  stringValueHistogramResult?: Map<string, number>;
}
