package shared

type RequestPhoneVerificationRequestPhoneVerificationMethodEnum string

const (
	RequestPhoneVerificationRequestPhoneVerificationMethodEnumPhoneVerificationMethodUnspecified RequestPhoneVerificationRequestPhoneVerificationMethodEnum = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
	RequestPhoneVerificationRequestPhoneVerificationMethodEnumSms                                RequestPhoneVerificationRequestPhoneVerificationMethodEnum = "SMS"
	RequestPhoneVerificationRequestPhoneVerificationMethodEnumPhoneCall                          RequestPhoneVerificationRequestPhoneVerificationMethodEnum = "PHONE_CALL"
)

// RequestPhoneVerificationRequest
// Request message for the RequestPhoneVerification method.
type RequestPhoneVerificationRequest struct {
	LanguageCode            *string                                                     `json:"languageCode,omitempty"`
	PhoneNumber             *string                                                     `json:"phoneNumber,omitempty"`
	PhoneRegionCode         *string                                                     `json:"phoneRegionCode,omitempty"`
	PhoneVerificationMethod *RequestPhoneVerificationRequestPhoneVerificationMethodEnum `json:"phoneVerificationMethod,omitempty"`
}
