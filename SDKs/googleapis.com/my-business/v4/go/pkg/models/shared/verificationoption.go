package shared




type VerificationOptionVerificationMethodEnum string

const (
    VerificationOptionVerificationMethodEnumVerificationMethodUnspecified VerificationOptionVerificationMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
VerificationOptionVerificationMethodEnumAddress VerificationOptionVerificationMethodEnum = "ADDRESS"
VerificationOptionVerificationMethodEnumEmail VerificationOptionVerificationMethodEnum = "EMAIL"
VerificationOptionVerificationMethodEnumPhoneCall VerificationOptionVerificationMethodEnum = "PHONE_CALL"
VerificationOptionVerificationMethodEnumSms VerificationOptionVerificationMethodEnum = "SMS"
VerificationOptionVerificationMethodEnumAuto VerificationOptionVerificationMethodEnum = "AUTO"
)


type VerificationOption struct {
    AddressData *AddressVerificationData `json:"addressData,omitempty"`
    EmailData *EmailVerificationData `json:"emailData,omitempty"`
    PhoneData *PhoneVerificationData `json:"phoneData,omitempty"`
    VerificationMethod *VerificationOptionVerificationMethodEnum `json:"verificationMethod,omitempty"`
    
}

