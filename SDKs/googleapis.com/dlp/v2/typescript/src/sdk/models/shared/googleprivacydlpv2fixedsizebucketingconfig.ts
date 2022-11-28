import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2FixedSizeBucketingConfig
/** 
 * Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
**/
export class GooglePrivacyDlpV2FixedSizeBucketingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketSize" })
  bucketSize?: number;

  @SpeakeasyMetadata({ data: "json, name=lowerBound" })
  lowerBound?: GooglePrivacyDlpV2Value;

  @SpeakeasyMetadata({ data: "json, name=upperBound" })
  upperBound?: GooglePrivacyDlpV2Value;
}
