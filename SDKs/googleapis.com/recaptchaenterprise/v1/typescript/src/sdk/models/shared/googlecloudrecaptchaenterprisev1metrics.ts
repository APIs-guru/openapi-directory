import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1ChallengeMetrics } from "./googlecloudrecaptchaenterprisev1challengemetrics";
import { GoogleCloudRecaptchaenterpriseV1ScoreMetrics } from "./googlecloudrecaptchaenterprisev1scoremetrics";



// GoogleCloudRecaptchaenterpriseV1Metrics
/** 
 * Metrics for a single Key.
**/
export class GoogleCloudRecaptchaenterpriseV1Metrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challengeMetrics", elemType: GoogleCloudRecaptchaenterpriseV1ChallengeMetrics })
  challengeMetrics?: GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreMetrics", elemType: GoogleCloudRecaptchaenterpriseV1ScoreMetrics })
  scoreMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreMetrics[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
