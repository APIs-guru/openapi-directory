import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum {
    TestingChallengeUnspecified = "TESTING_CHALLENGE_UNSPECIFIED"
,    Nocaptcha = "NOCAPTCHA"
,    UnsolvableChallenge = "UNSOLVABLE_CHALLENGE"
}


// GoogleCloudRecaptchaenterpriseV1TestingOptions
/** 
 * Options for user acceptance testing.
**/
export class GoogleCloudRecaptchaenterpriseV1TestingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=testingChallenge" })
  testingChallenge?: GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;

  @Metadata({ data: "json, name=testingScore" })
  testingScore?: number;
}
