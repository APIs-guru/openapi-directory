package shared

type NiCallerIdentityCallerTypeEnum string

const (
	NiCallerIdentityCallerTypeEnumBusiness NiCallerIdentityCallerTypeEnum = "business"
	NiCallerIdentityCallerTypeEnumConsumer NiCallerIdentityCallerTypeEnum = "consumer"
	NiCallerIdentityCallerTypeEnumUnknown  NiCallerIdentityCallerTypeEnum = "unknown"
)

// NiCallerIdentity
// Information about the network `number` is currently connected to.
type NiCallerIdentity struct {
	CallerName *string                         `json:"caller_name,omitempty"`
	CallerType *NiCallerIdentityCallerTypeEnum `json:"caller_type,omitempty"`
	FirstName  *string                         `json:"first_name,omitempty"`
	LastName   *string                         `json:"last_name,omitempty"`
}
