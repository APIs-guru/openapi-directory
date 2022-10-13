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

type VerificationOption struct {
	AddressData        *AddressVerificationData                  `json:"addressData"`
	EmailData          *EmailVerificationData                    `json:"emailData"`
	PhoneData          *PhoneVerificationData                    `json:"phoneData"`
	VerificationMethod *VerificationOptionVerificationMethodEnum `json:"verificationMethod"`
}
