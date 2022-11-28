package shared

// GoogleHomeEnterpriseSdmV1Device
// Device resource represents an instance of enterprise managed device in the property.
type GoogleHomeEnterpriseSdmV1Device struct {
	Name            *string                                   `json:"name,omitempty"`
	ParentRelations []GoogleHomeEnterpriseSdmV1ParentRelation `json:"parentRelations,omitempty"`
	Traits          map[string]interface{}                    `json:"traits,omitempty"`
	Type            *string                                   `json:"type,omitempty"`
}
