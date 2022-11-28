import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1ScoreDistribution } from "./googlecloudrecaptchaenterprisev1scoredistribution";



// GoogleCloudRecaptchaenterpriseV1ScoreMetrics
/** 
 * Metrics related to scoring.
**/
export class GoogleCloudRecaptchaenterpriseV1ScoreMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionMetrics", elemType: GoogleCloudRecaptchaenterpriseV1ScoreDistribution })
  actionMetrics?: Map<string, GoogleCloudRecaptchaenterpriseV1ScoreDistribution>;

  @SpeakeasyMetadata({ data: "json, name=overallMetrics" })
  overallMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
}
