package shared

// Category
// Represents the category hierarchy of a SKU.
type Category struct {
	ResourceFamily     *string `json:"resourceFamily,omitempty"`
	ResourceGroup      *string `json:"resourceGroup,omitempty"`
	ServiceDisplayName *string `json:"serviceDisplayName,omitempty"`
	UsageType          *string `json:"usageType,omitempty"`
}
