package shared

type VerificationMethodEnum string

const (
	VerificationMethodEnumVerificationMethodUnspecified VerificationMethodEnum = "VERIFICATION_METHOD_UNSPECIFIED"
	VerificationMethodEnumAddress                       VerificationMethodEnum = "ADDRESS"
	VerificationMethodEnumEmail                         VerificationMethodEnum = "EMAIL"
	VerificationMethodEnumPhoneCall                     VerificationMethodEnum = "PHONE_CALL"
	VerificationMethodEnumSms                           VerificationMethodEnum = "SMS"
	VerificationMethodEnumAuto                          VerificationMethodEnum = "AUTO"
)

type VerificationStateEnum string

const (
	VerificationStateEnumVerificationStateUnspecified VerificationStateEnum = "VERIFICATION_STATE_UNSPECIFIED"
	VerificationStateEnumPending                      VerificationStateEnum = "PENDING"
	VerificationStateEnumCompleted                    VerificationStateEnum = "COMPLETED"
	VerificationStateEnumFailed                       VerificationStateEnum = "FAILED"
)

type Verification struct {
	CreateTime *string                 `json:"createTime"`
	Method     *VerificationMethodEnum `json:"method"`
	Name       *string                 `json:"name"`
	State      *VerificationStateEnum  `json:"state"`
}
