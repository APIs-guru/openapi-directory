import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum {
    TestingChallengeUnspecified = "TESTING_CHALLENGE_UNSPECIFIED",
    Nocaptcha = "NOCAPTCHA",
    UnsolvableChallenge = "UNSOLVABLE_CHALLENGE"
}


// GoogleCloudRecaptchaenterpriseV1TestingOptions
/** 
 * Options for user acceptance testing.
**/
export class GoogleCloudRecaptchaenterpriseV1TestingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testingChallenge" })
  testingChallenge?: GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;

  @SpeakeasyMetadata({ data: "json, name=testingScore" })
  testingScore?: number;
}
