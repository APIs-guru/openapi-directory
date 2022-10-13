package shared

type VerifyLocationRequestMethodEnum string

const (
	VerifyLocationRequestMethodEnumVerificationMethodUnspecified VerifyLocationRequestMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
	VerifyLocationRequestMethodEnumAddress                       VerifyLocationRequestMethodEnum = "ADDRESS"
	VerifyLocationRequestMethodEnumEmail                         VerifyLocationRequestMethodEnum = "EMAIL"
	VerifyLocationRequestMethodEnumPhoneCall                     VerifyLocationRequestMethodEnum = "PHONE_CALL"
	VerifyLocationRequestMethodEnumSms                           VerifyLocationRequestMethodEnum = "SMS"
	VerifyLocationRequestMethodEnumAuto                          VerifyLocationRequestMethodEnum = "AUTO"
)

type VerifyLocationRequest struct {
	AddressInput *AddressInput                    `json:"addressInput"`
	Context      *ServiceBusinessContext          `json:"context"`
	EmailInput   *EmailInput                      `json:"emailInput"`
	LanguageCode *string                          `json:"languageCode"`
	Method       *VerifyLocationRequestMethodEnum `json:"method"`
	PhoneInput   *PhoneInput                      `json:"phoneInput"`
}
