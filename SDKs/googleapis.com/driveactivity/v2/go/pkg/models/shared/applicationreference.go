package shared

type ApplicationReferenceTypeEnum string

const (
	ApplicationReferenceTypeEnumUnspecifiedReferenceType ApplicationReferenceTypeEnum = "UNSPECIFIED_REFERENCE_TYPE"
	ApplicationReferenceTypeEnumLink                     ApplicationReferenceTypeEnum = "LINK"
	ApplicationReferenceTypeEnumDiscuss                  ApplicationReferenceTypeEnum = "DISCUSS"
)

// ApplicationReference
// Activity in applications other than Drive.
type ApplicationReference struct {
	Type *ApplicationReferenceTypeEnum `json:"type,omitempty"`
}
