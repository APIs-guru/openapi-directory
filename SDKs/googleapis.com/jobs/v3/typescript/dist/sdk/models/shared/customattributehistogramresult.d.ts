import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingResult } from "./numericbucketingresult";
/**
 * Output only. Custom attribute histogram result.
**/
export declare class CustomAttributeHistogramResult extends SpeakeasyBase {
    key?: string;
    longValueHistogramResult?: NumericBucketingResult;
    stringValueHistogramResult?: Map<string, number>;
}
