package shared

// StructuredServiceItem
// Represents a structured service offered by the merchant. For eg: toilet_installation.
type StructuredServiceItem struct {
	Description   *string `json:"description,omitempty"`
	ServiceTypeID *string `json:"serviceTypeId,omitempty"`
}
