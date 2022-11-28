package shared

type GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumIdentityTypeUnspecified GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "IDENTITY_TYPE_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumAnyIdentity             GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "ANY_IDENTITY"
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumAnyUserAccount          GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "ANY_USER_ACCOUNT"
	GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnumAnyServiceAccount       GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum = "ANY_SERVICE_ACCOUNT"
)

// GoogleIdentityAccesscontextmanagerV1IngressFrom
// Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
type GoogleIdentityAccesscontextmanagerV1IngressFrom struct {
	Identities   []string                                                         `json:"identities,omitempty"`
	IdentityType *GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum `json:"identityType,omitempty"`
	Sources      []GoogleIdentityAccesscontextmanagerV1IngressSource              `json:"sources,omitempty"`
}
