package shared

type Location struct {
	DisplayName *string                `json:"displayName,omitempty"`
	Labels      map[string]string      `json:"labels,omitempty"`
	LocationID  *string                `json:"locationId,omitempty"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
	Name        *string                `json:"name,omitempty"`
}
