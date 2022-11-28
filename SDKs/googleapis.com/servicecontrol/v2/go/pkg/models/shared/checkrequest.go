package shared

// CheckRequest
// Request message for the Check method.
type CheckRequest struct {
	Attributes      *AttributeContext `json:"attributes,omitempty"`
	Flags           *string           `json:"flags,omitempty"`
	Resources       []ResourceInfo    `json:"resources,omitempty"`
	ServiceConfigID *string           `json:"serviceConfigId,omitempty"`
}
