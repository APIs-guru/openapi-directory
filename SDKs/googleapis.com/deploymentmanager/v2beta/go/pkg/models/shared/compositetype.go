package shared

type CompositeTypeStatusEnum string

const (
	CompositeTypeStatusEnumUnknownStatus CompositeTypeStatusEnum = "UNKNOWN_STATUS"
	CompositeTypeStatusEnumDeprecated    CompositeTypeStatusEnum = "DEPRECATED"
	CompositeTypeStatusEnumExperimental  CompositeTypeStatusEnum = "EXPERIMENTAL"
	CompositeTypeStatusEnumSupported     CompositeTypeStatusEnum = "SUPPORTED"
)

type CompositeType struct {
	Description      *string                   `json:"description,omitempty"`
	ID               *string                   `json:"id,omitempty"`
	InsertTime       *string                   `json:"insertTime,omitempty"`
	Labels           []CompositeTypeLabelEntry `json:"labels,omitempty"`
	Name             *string                   `json:"name,omitempty"`
	Operation        *Operation                `json:"operation,omitempty"`
	SelfLink         *string                   `json:"selfLink,omitempty"`
	Status           *CompositeTypeStatusEnum  `json:"status,omitempty"`
	TemplateContents *TemplateContents         `json:"templateContents,omitempty"`
}
