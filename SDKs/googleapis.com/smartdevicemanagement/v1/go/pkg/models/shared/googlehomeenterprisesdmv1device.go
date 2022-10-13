package shared

type GoogleHomeEnterpriseSdmV1Device struct {
	Name            *string                                   `json:"name"`
	ParentRelations []GoogleHomeEnterpriseSdmV1ParentRelation `json:"parentRelations"`
	Traits          map[string]interface{}                    `json:"traits"`
	Type            *string                                   `json:"type"`
}
