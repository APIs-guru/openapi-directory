package shared

type GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumIdentityTypeUnspecified GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumAnyIdentity             GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "ANY_IDENTITY"
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumAnyUserAccount          GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumAnyServiceAccount       GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

// GoogleIdentityAccesscontextmanagerV1EgressFrom
// Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
type GoogleIdentityAccesscontextmanagerV1EgressFrom struct {
	Identities   []string                                                        `json:"identities,omitempty"`
	IdentityType *GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum `json:"identityType,omitempty"`
}
