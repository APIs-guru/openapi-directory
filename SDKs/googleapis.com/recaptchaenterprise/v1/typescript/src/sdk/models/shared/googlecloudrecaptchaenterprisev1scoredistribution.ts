import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1ScoreDistribution
/** 
 * Score distribution.
**/
export class GoogleCloudRecaptchaenterpriseV1ScoreDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scoreBuckets" })
  scoreBuckets?: Map<string, string>;
}
