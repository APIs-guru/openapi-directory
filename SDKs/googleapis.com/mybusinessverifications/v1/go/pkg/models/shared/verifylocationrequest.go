package shared

type VerifyLocationRequestMethodEnum string

const (
	VerifyLocationRequestMethodEnumVerificationMethodUnspecified VerifyLocationRequestMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
	VerifyLocationRequestMethodEnumAddress                       VerifyLocationRequestMethodEnum = "ADDRESS"
	VerifyLocationRequestMethodEnumEmail                         VerifyLocationRequestMethodEnum = "EMAIL"
	VerifyLocationRequestMethodEnumPhoneCall                     VerifyLocationRequestMethodEnum = "PHONE_CALL"
	VerifyLocationRequestMethodEnumSms                           VerifyLocationRequestMethodEnum = "SMS"
	VerifyLocationRequestMethodEnumAuto                          VerifyLocationRequestMethodEnum = "AUTO"
	VerifyLocationRequestMethodEnumVettedPartner                 VerifyLocationRequestMethodEnum = "VETTED_PARTNER"
)

type VerifyLocationRequest struct {
	Context       *ServiceBusinessContext          `json:"context,omitempty"`
	EmailAddress  *string                          `json:"emailAddress,omitempty"`
	LanguageCode  *string                          `json:"languageCode,omitempty"`
	MailerContact *string                          `json:"mailerContact,omitempty"`
	Method        *VerifyLocationRequestMethodEnum `json:"method,omitempty"`
	PhoneNumber   *string                          `json:"phoneNumber,omitempty"`
	Token         *VerificationToken               `json:"token,omitempty"`
}
