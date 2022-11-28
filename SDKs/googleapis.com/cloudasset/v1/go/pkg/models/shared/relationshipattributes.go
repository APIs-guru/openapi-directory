package shared

// RelationshipAttributes
// DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
type RelationshipAttributes struct {
	Action             *string `json:"action,omitempty"`
	SourceResourceType *string `json:"sourceResourceType,omitempty"`
	TargetResourceType *string `json:"targetResourceType,omitempty"`
	Type               *string `json:"type,omitempty"`
}
