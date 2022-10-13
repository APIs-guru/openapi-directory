package shared

type ChallengeDataOtpFormatEnum string

const (
	ChallengeDataOtpFormatEnumCharacters ChallengeDataOtpFormatEnum = "characters"
	ChallengeDataOtpFormatEnumInteger    ChallengeDataOtpFormatEnum = "integer"
)

type ChallengeData struct {
	AdditionalInformation *string                     `json:"additionalInformation"`
	Data                  []string                    `json:"data"`
	Image                 *string                     `json:"image"`
	ImageLink             *string                     `json:"imageLink"`
	OtpFormat             *ChallengeDataOtpFormatEnum `json:"otpFormat"`
	OtpMaxLength          *int64                      `json:"otpMaxLength"`
}
