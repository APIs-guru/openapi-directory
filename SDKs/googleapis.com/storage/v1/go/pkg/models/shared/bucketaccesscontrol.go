package shared



type BucketAccessControlProjectTeam struct {
    ProjectNumber *string `json:"projectNumber,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BucketAccessControl struct {
    Bucket *string `json:"bucket,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Email *string `json:"email,omitempty"`
    Entity *string `json:"entity,omitempty"`
    EntityID *string `json:"entityId,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ProjectTeam *BucketAccessControlProjectTeam `json:"projectTeam,omitempty"`
    Role *string `json:"role,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    
}

