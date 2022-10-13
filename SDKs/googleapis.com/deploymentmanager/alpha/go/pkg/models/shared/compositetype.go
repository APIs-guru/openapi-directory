package shared

type CompositeTypeStatusEnum string

const (
	CompositeTypeStatusEnumUnknownStatus CompositeTypeStatusEnum = "UNKNOWN_STATUS"
	CompositeTypeStatusEnumDeprecated    CompositeTypeStatusEnum = "DEPRECATED"
	CompositeTypeStatusEnumExperimental  CompositeTypeStatusEnum = "EXPERIMENTAL"
	CompositeTypeStatusEnumSupported     CompositeTypeStatusEnum = "SUPPORTED"
)

type CompositeType struct {
	Description      *string                   `json:"description"`
	ID               *string                   `json:"id"`
	InsertTime       *string                   `json:"insertTime"`
	Labels           []CompositeTypeLabelEntry `json:"labels"`
	Name             *string                   `json:"name"`
	Operation        *Operation                `json:"operation"`
	SelfLink         *string                   `json:"selfLink"`
	Status           *CompositeTypeStatusEnum  `json:"status"`
	TemplateContents *TemplateContents         `json:"templateContents"`
}
