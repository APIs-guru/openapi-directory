package shared

type VerifyPhoneNumberRequestPhoneVerificationMethodEnum string

const (
	VerifyPhoneNumberRequestPhoneVerificationMethodEnumPhoneVerificationMethodUnspecified VerifyPhoneNumberRequestPhoneVerificationMethodEnum = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
	VerifyPhoneNumberRequestPhoneVerificationMethodEnumSms                                VerifyPhoneNumberRequestPhoneVerificationMethodEnum = "SMS"
	VerifyPhoneNumberRequestPhoneVerificationMethodEnumPhoneCall                          VerifyPhoneNumberRequestPhoneVerificationMethodEnum = "PHONE_CALL"
)

type VerifyPhoneNumberRequest struct {
	PhoneVerificationMethod *VerifyPhoneNumberRequestPhoneVerificationMethodEnum `json:"phoneVerificationMethod"`
	VerificationCode        *string                                              `json:"verificationCode"`
	VerificationID          *string                                              `json:"verificationId"`
}
