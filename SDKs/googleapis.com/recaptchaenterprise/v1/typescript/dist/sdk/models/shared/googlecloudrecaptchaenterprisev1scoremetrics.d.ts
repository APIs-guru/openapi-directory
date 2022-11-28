import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1ScoreDistribution } from "./googlecloudrecaptchaenterprisev1scoredistribution";
/**
 * Metrics related to scoring.
**/
export declare class GoogleCloudRecaptchaenterpriseV1ScoreMetrics extends SpeakeasyBase {
    actionMetrics?: Map<string, GoogleCloudRecaptchaenterpriseV1ScoreDistribution>;
    overallMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
}
