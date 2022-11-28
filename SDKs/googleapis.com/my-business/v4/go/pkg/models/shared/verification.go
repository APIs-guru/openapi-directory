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

// Verification
// A verification represents a verification attempt on a location.
type Verification struct {
	CreateTime *string                 `json:"createTime,omitempty"`
	Method     *VerificationMethodEnum `json:"method,omitempty"`
	Name       *string                 `json:"name,omitempty"`
	State      *VerificationStateEnum  `json:"state,omitempty"`
}
