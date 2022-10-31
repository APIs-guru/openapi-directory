package shared




type VerifyLocationRequestMethodEnum string

const (
    VerifyLocationRequestMethodEnumVerificationMethodUnspecified VerifyLocationRequestMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
VerifyLocationRequestMethodEnumAddress VerifyLocationRequestMethodEnum = "ADDRESS"
VerifyLocationRequestMethodEnumEmail VerifyLocationRequestMethodEnum = "EMAIL"
VerifyLocationRequestMethodEnumPhoneCall VerifyLocationRequestMethodEnum = "PHONE_CALL"
VerifyLocationRequestMethodEnumSms VerifyLocationRequestMethodEnum = "SMS"
VerifyLocationRequestMethodEnumAuto VerifyLocationRequestMethodEnum = "AUTO"
)


type VerifyLocationRequest struct {
    AddressInput *AddressInput `json:"addressInput,omitempty"`
    Context *ServiceBusinessContext `json:"context,omitempty"`
    EmailInput *EmailInput `json:"emailInput,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    Method *VerifyLocationRequestMethodEnum `json:"method,omitempty"`
    PhoneInput *PhoneInput `json:"phoneInput,omitempty"`
    
}

