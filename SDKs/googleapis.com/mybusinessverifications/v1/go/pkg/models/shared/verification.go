package shared




type VerificationMethodEnum string

const (
    VerificationMethodEnumVerificationMethodUnspecified VerificationMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
VerificationMethodEnumAddress VerificationMethodEnum = "ADDRESS"
VerificationMethodEnumEmail VerificationMethodEnum = "EMAIL"
VerificationMethodEnumPhoneCall VerificationMethodEnum = "PHONE_CALL"
VerificationMethodEnumSms VerificationMethodEnum = "SMS"
VerificationMethodEnumAuto VerificationMethodEnum = "AUTO"
VerificationMethodEnumVettedPartner VerificationMethodEnum = "VETTED_PARTNER"
)



type VerificationStateEnum string

const (
    VerificationStateEnumStateUnspecified VerificationStateEnum = "STATE_UNSPECIFIED"
VerificationStateEnumPending VerificationStateEnum = "PENDING"
VerificationStateEnumCompleted VerificationStateEnum = "COMPLETED"
VerificationStateEnumFailed VerificationStateEnum = "FAILED"
)


type Verification struct {
    CreateTime *string `json:"createTime,omitempty"`
    Method *VerificationMethodEnum `json:"method,omitempty"`
    Name *string `json:"name,omitempty"`
    State *VerificationStateEnum `json:"state,omitempty"`
    
}

