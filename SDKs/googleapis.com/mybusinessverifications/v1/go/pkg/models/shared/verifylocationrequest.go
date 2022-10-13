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
	Context       *ServiceBusinessContext          `json:"context"`
	EmailAddress  *string                          `json:"emailAddress"`
	LanguageCode  *string                          `json:"languageCode"`
	MailerContact *string                          `json:"mailerContact"`
	Method        *VerifyLocationRequestMethodEnum `json:"method"`
	PhoneNumber   *string                          `json:"phoneNumber"`
	Token         *VerificationToken               `json:"token"`
}
