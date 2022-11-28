import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum {
    TestingChallengeUnspecified = "TESTING_CHALLENGE_UNSPECIFIED",
    Nocaptcha = "NOCAPTCHA",
    UnsolvableChallenge = "UNSOLVABLE_CHALLENGE"
}
/**
 * Options for user acceptance testing.
**/
export declare class GoogleCloudRecaptchaenterpriseV1TestingOptions extends SpeakeasyBase {
    testingChallenge?: GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;
    testingScore?: number;
}
