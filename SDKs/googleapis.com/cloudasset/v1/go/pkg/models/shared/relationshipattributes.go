package shared

type RelationshipAttributes struct {
	Action             *string `json:"action"`
	SourceResourceType *string `json:"sourceResourceType"`
	TargetResourceType *string `json:"targetResourceType"`
	Type               *string `json:"type"`
}
