import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1ChallengeMetrics
/** 
 * Metrics related to challenges.
**/
export class GoogleCloudRecaptchaenterpriseV1ChallengeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedCount" })
  failedCount?: string;

  @SpeakeasyMetadata({ data: "json, name=nocaptchaCount" })
  nocaptchaCount?: string;

  @SpeakeasyMetadata({ data: "json, name=pageloadCount" })
  pageloadCount?: string;

  @SpeakeasyMetadata({ data: "json, name=passedCount" })
  passedCount?: string;
}
