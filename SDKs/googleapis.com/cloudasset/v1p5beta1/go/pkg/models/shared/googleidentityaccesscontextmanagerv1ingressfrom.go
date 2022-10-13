package shared

type GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumIdentityTypeUnspecified GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumAnyIdentity             GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "ANY_IDENTITY"
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumAnyUserAccount          GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumAnyServiceAccount       GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

type GoogleIdentityAccesscontextmanagerV1IngressFrom struct {
	Identities   []string                                                         `json:"identities"`
	IdentityType *GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum `json:"identityType"`
	Sources      []GoogleIdentityAccesscontextmanagerV1IngressSource              `json:"sources"`
}
