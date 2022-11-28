package shared

type ChallengeDataOtpFormatEnum string

const (
	ChallengeDataOtpFormatEnumCharacters ChallengeDataOtpFormatEnum = "characters"
	ChallengeDataOtpFormatEnumInteger    ChallengeDataOtpFormatEnum = "integer"
)

// ChallengeData
// It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
// In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
type ChallengeData struct {
	AdditionalInformation *string                     `json:"additionalInformation,omitempty"`
	Data                  []string                    `json:"data,omitempty"`
	Image                 *string                     `json:"image,omitempty"`
	ImageLink             *string                     `json:"imageLink,omitempty"`
	OtpFormat             *ChallengeDataOtpFormatEnum `json:"otpFormat,omitempty"`
	OtpMaxLength          *int64                      `json:"otpMaxLength,omitempty"`
}
