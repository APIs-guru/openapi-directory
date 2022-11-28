import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1ChallengeMetrics } from "./googlecloudrecaptchaenterprisev1challengemetrics";
import { GoogleCloudRecaptchaenterpriseV1ScoreMetrics } from "./googlecloudrecaptchaenterprisev1scoremetrics";
/**
 * Metrics for a single Key.
**/
export declare class GoogleCloudRecaptchaenterpriseV1Metrics extends SpeakeasyBase {
    challengeMetrics?: GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[];
    name?: string;
    scoreMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreMetrics[];
    startTime?: string;
}
