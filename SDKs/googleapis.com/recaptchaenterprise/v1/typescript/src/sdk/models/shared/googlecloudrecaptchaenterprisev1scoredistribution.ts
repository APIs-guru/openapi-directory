import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1ScoreDistribution
/** 
 * Score distribution.
**/
export class GoogleCloudRecaptchaenterpriseV1ScoreDistribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=scoreBuckets" })
  scoreBuckets?: Map<string, string>;
}
