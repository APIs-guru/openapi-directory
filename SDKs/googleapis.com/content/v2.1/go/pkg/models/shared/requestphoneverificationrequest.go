package shared

type RequestPhoneVerificationRequestPhoneVerificationMethodEnum string

const (
	RequestPhoneVerificationRequestPhoneVerificationMethodEnumPhoneVerificationMethodUnspecified RequestPhoneVerificationRequestPhoneVerificationMethodEnum = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
	RequestPhoneVerificationRequestPhoneVerificationMethodEnumSms                                RequestPhoneVerificationRequestPhoneVerificationMethodEnum = "SMS"
	RequestPhoneVerificationRequestPhoneVerificationMethodEnumPhoneCall                          RequestPhoneVerificationRequestPhoneVerificationMethodEnum = "PHONE_CALL"
)

type RequestPhoneVerificationRequest struct {
	LanguageCode            *string                                                     `json:"languageCode"`
	PhoneNumber             *string                                                     `json:"phoneNumber"`
	PhoneRegionCode         *string                                                     `json:"phoneRegionCode"`
	PhoneVerificationMethod *RequestPhoneVerificationRequestPhoneVerificationMethodEnum `json:"phoneVerificationMethod"`
}
