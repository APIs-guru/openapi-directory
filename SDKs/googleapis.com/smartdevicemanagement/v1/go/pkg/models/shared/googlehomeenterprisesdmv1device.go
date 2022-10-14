package shared

type GoogleHomeEnterpriseSdmV1Device struct {
	Name            *string                                   `json:"name,omitempty"`
	ParentRelations []GoogleHomeEnterpriseSdmV1ParentRelation `json:"parentRelations,omitempty"`
	Traits          map[string]interface{}                    `json:"traits,omitempty"`
	Type            *string                                   `json:"type,omitempty"`
}
