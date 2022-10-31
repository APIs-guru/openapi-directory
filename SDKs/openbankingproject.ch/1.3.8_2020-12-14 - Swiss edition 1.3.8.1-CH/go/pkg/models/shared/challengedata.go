package shared




type ChallengeDataOtpFormatEnum string

const (
    ChallengeDataOtpFormatEnumCharacters ChallengeDataOtpFormatEnum = "characters"
ChallengeDataOtpFormatEnumInteger ChallengeDataOtpFormatEnum = "integer"
)


type ChallengeData struct {
    AdditionalInformation *string `json:"additionalInformation,omitempty"`
    Data []string `json:"data,omitempty"`
    Image *string `json:"image,omitempty"`
    ImageLink *string `json:"imageLink,omitempty"`
    OtpFormat *ChallengeDataOtpFormatEnum `json:"otpFormat,omitempty"`
    OtpMaxLength *int64 `json:"otpMaxLength,omitempty"`
    
}

