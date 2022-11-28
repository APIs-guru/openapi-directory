import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumericBucketingOption
/** 
 * Input only. Use this field to specify bucketing option for the histogram search response.
**/
export class NumericBucketingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketBounds" })
  bucketBounds?: number[];

  @SpeakeasyMetadata({ data: "json, name=requiresMinMax" })
  requiresMinMax?: boolean;
}
