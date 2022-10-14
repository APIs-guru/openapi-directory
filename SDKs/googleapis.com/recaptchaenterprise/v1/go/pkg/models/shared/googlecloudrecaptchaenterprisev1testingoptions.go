package shared

type GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum string

const (
	GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnumTestingChallengeUnspecified GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum = "TESTING_CHALLENGE_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnumNocaptcha                   GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum = "NOCAPTCHA"
	GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnumUnsolvableChallenge         GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum = "UNSOLVABLE_CHALLENGE"
)

type GoogleCloudRecaptchaenterpriseV1TestingOptions struct {
	TestingChallenge *GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum `json:"testingChallenge,omitempty"`
	TestingScore     *float32                                                            `json:"testingScore,omitempty"`
}
