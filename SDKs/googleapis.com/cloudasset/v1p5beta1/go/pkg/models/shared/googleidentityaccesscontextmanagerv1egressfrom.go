package shared

type GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumIdentityTypeUnspecified GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumAnyIdentity             GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "ANY_IDENTITY"
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumAnyUserAccount          GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnumAnyServiceAccount       GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

type GoogleIdentityAccesscontextmanagerV1EgressFrom struct {
	Identities   []string                                                        `json:"identities,omitempty"`
	IdentityType *GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum `json:"identityType,omitempty"`
}
