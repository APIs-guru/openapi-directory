package shared

type ObjectAccessControlProjectTeam struct {
	ProjectNumber *string `json:"projectNumber"`
	Team          *string `json:"team"`
}

type ObjectAccessControl struct {
	Bucket      *string                         `json:"bucket"`
	Domain      *string                         `json:"domain"`
	Email       *string                         `json:"email"`
	Entity      *string                         `json:"entity"`
	EntityID    *string                         `json:"entityId"`
	Etag        *string                         `json:"etag"`
	Generation  *string                         `json:"generation"`
	ID          *string                         `json:"id"`
	Kind        *string                         `json:"kind"`
	Object      *string                         `json:"object"`
	ProjectTeam *ObjectAccessControlProjectTeam `json:"projectTeam"`
	Role        *string                         `json:"role"`
	SelfLink    *string                         `json:"selfLink"`
}
