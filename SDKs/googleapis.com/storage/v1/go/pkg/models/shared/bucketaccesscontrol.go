package shared

type BucketAccessControlProjectTeam struct {
	ProjectNumber *string `json:"projectNumber"`
	Team          *string `json:"team"`
}

type BucketAccessControl struct {
	Bucket      *string                         `json:"bucket"`
	Domain      *string                         `json:"domain"`
	Email       *string                         `json:"email"`
	Entity      *string                         `json:"entity"`
	EntityID    *string                         `json:"entityId"`
	Etag        *string                         `json:"etag"`
	ID          *string                         `json:"id"`
	Kind        *string                         `json:"kind"`
	ProjectTeam *BucketAccessControlProjectTeam `json:"projectTeam"`
	Role        *string                         `json:"role"`
	SelfLink    *string                         `json:"selfLink"`
}
