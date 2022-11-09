import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NumericBucketingOption
/** 
 * Input only. Use this field to specify bucketing option for the histogram search response.
**/
export class NumericBucketingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketBounds" })
  bucketBounds?: number[];

  @Metadata({ data: "json, name=requiresMinMax" })
  requiresMinMax?: boolean;
}
