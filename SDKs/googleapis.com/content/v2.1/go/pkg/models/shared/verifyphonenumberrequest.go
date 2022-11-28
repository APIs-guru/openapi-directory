package shared

type VerifyPhoneNumberRequestPhoneVerificationMethodEnum string

const (
	VerifyPhoneNumberRequestPhoneVerificationMethodEnumPhoneVerificationMethodUnspecified VerifyPhoneNumberRequestPhoneVerificationMethodEnum = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
	VerifyPhoneNumberRequestPhoneVerificationMethodEnumSms                                VerifyPhoneNumberRequestPhoneVerificationMethodEnum = "SMS"
	VerifyPhoneNumberRequestPhoneVerificationMethodEnumPhoneCall                          VerifyPhoneNumberRequestPhoneVerificationMethodEnum = "PHONE_CALL"
)

// VerifyPhoneNumberRequest
// Request message for the VerifyPhoneNumber method.
type VerifyPhoneNumberRequest struct {
	PhoneVerificationMethod *VerifyPhoneNumberRequestPhoneVerificationMethodEnum `json:"phoneVerificationMethod,omitempty"`
	VerificationCode        *string                                              `json:"verificationCode,omitempty"`
	VerificationID          *string                                              `json:"verificationId,omitempty"`
}
