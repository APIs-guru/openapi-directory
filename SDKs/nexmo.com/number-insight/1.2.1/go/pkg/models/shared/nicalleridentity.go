package shared

type NiCallerIdentityCallerTypeEnum string

const (
	NiCallerIdentityCallerTypeEnumBusiness NiCallerIdentityCallerTypeEnum = "business"
	NiCallerIdentityCallerTypeEnumConsumer NiCallerIdentityCallerTypeEnum = "consumer"
	NiCallerIdentityCallerTypeEnumUnknown  NiCallerIdentityCallerTypeEnum = "unknown"
)

type NiCallerIdentity struct {
	CallerName *string                         `json:"caller_name"`
	CallerType *NiCallerIdentityCallerTypeEnum `json:"caller_type"`
	FirstName  *string                         `json:"first_name"`
	LastName   *string                         `json:"last_name"`
}
