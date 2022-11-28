package shared

type VerificationOptionVerificationMethodEnum string

const (
	VerificationOptionVerificationMethodEnumVerificationMethodUnspecified VerificationOptionVerificationMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
	VerificationOptionVerificationMethodEnumAddress                       VerificationOptionVerificationMethodEnum = "ADDRESS"
	VerificationOptionVerificationMethodEnumEmail                         VerificationOptionVerificationMethodEnum = "EMAIL"
	VerificationOptionVerificationMethodEnumPhoneCall                     VerificationOptionVerificationMethodEnum = "PHONE_CALL"
	VerificationOptionVerificationMethodEnumSms                           VerificationOptionVerificationMethodEnum = "SMS"
	VerificationOptionVerificationMethodEnumAuto                          VerificationOptionVerificationMethodEnum = "AUTO"
)

// VerificationOption
// The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
type VerificationOption struct {
	AddressData        *AddressVerificationData                  `json:"addressData,omitempty"`
	EmailData          *EmailVerificationData                    `json:"emailData,omitempty"`
	PhoneData          *PhoneVerificationData                    `json:"phoneData,omitempty"`
	VerificationMethod *VerificationOptionVerificationMethodEnum `json:"verificationMethod,omitempty"`
}
