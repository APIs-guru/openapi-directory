import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1ChallengeMetrics
/** 
 * Metrics related to challenges.
**/
export class GoogleCloudRecaptchaenterpriseV1ChallengeMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedCount" })
  failedCount?: string;

  @Metadata({ data: "json, name=nocaptchaCount" })
  nocaptchaCount?: string;

  @Metadata({ data: "json, name=pageloadCount" })
  pageloadCount?: string;

  @Metadata({ data: "json, name=passedCount" })
  passedCount?: string;
}
