package shared

// ObjectAccessControlProjectTeam
// The project team associated with the entity, if any.
type ObjectAccessControlProjectTeam struct {
	ProjectNumber *string `json:"projectNumber,omitempty"`
	Team          *string `json:"team,omitempty"`
}

// ObjectAccessControl
// An access-control entry.
type ObjectAccessControl struct {
	Bucket      *string                         `json:"bucket,omitempty"`
	Domain      *string                         `json:"domain,omitempty"`
	Email       *string                         `json:"email,omitempty"`
	Entity      *string                         `json:"entity,omitempty"`
	EntityID    *string                         `json:"entityId,omitempty"`
	Etag        *string                         `json:"etag,omitempty"`
	Generation  *string                         `json:"generation,omitempty"`
	ID          *string                         `json:"id,omitempty"`
	Kind        *string                         `json:"kind,omitempty"`
	Object      *string                         `json:"object,omitempty"`
	ProjectTeam *ObjectAccessControlProjectTeam `json:"projectTeam,omitempty"`
	Role        *string                         `json:"role,omitempty"`
	SelfLink    *string                         `json:"selfLink,omitempty"`
}
