import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecaptchaenterpriseV1ChallengeMetrics } from "./googlecloudrecaptchaenterprisev1challengemetrics";
import { GoogleCloudRecaptchaenterpriseV1ScoreMetrics } from "./googlecloudrecaptchaenterprisev1scoremetrics";


// GoogleCloudRecaptchaenterpriseV1Metrics
/** 
 * Metrics for a single Key.
**/
export class GoogleCloudRecaptchaenterpriseV1Metrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=challengeMetrics", elemType: shared.GoogleCloudRecaptchaenterpriseV1ChallengeMetrics })
  challengeMetrics?: GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scoreMetrics", elemType: shared.GoogleCloudRecaptchaenterpriseV1ScoreMetrics })
  scoreMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreMetrics[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
