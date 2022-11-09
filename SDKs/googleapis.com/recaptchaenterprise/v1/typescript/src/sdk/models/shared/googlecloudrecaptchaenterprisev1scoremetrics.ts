import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecaptchaenterpriseV1ScoreDistribution } from "./googlecloudrecaptchaenterprisev1scoredistribution";
import { GoogleCloudRecaptchaenterpriseV1ScoreDistribution } from "./googlecloudrecaptchaenterprisev1scoredistribution";


// GoogleCloudRecaptchaenterpriseV1ScoreMetrics
/** 
 * Metrics related to scoring.
**/
export class GoogleCloudRecaptchaenterpriseV1ScoreMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionMetrics", elemType: shared.GoogleCloudRecaptchaenterpriseV1ScoreDistribution })
  actionMetrics?: Map<string, GoogleCloudRecaptchaenterpriseV1ScoreDistribution>;

  @Metadata({ data: "json, name=overallMetrics" })
  overallMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
}
