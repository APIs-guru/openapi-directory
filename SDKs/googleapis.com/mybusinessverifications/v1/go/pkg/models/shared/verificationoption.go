package shared

type VerificationOptionVerificationMethodEnum string

const (
	VerificationOptionVerificationMethodEnumVerificationMethodUnspecified VerificationOptionVerificationMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
	VerificationOptionVerificationMethodEnumAddress                       VerificationOptionVerificationMethodEnum = "ADDRESS"
	VerificationOptionVerificationMethodEnumEmail                         VerificationOptionVerificationMethodEnum = "EMAIL"
	VerificationOptionVerificationMethodEnumPhoneCall                     VerificationOptionVerificationMethodEnum = "PHONE_CALL"
	VerificationOptionVerificationMethodEnumSms                           VerificationOptionVerificationMethodEnum = "SMS"
	VerificationOptionVerificationMethodEnumAuto                          VerificationOptionVerificationMethodEnum = "AUTO"
	VerificationOptionVerificationMethodEnumVettedPartner                 VerificationOptionVerificationMethodEnum = "VETTED_PARTNER"
)

type VerificationOption struct {
	AddressData        *AddressVerificationData                  `json:"addressData"`
	EmailData          *EmailVerificationData                    `json:"emailData"`
	PhoneNumber        *string                                   `json:"phoneNumber"`
	VerificationMethod *VerificationOptionVerificationMethodEnum `json:"verificationMethod"`
}
