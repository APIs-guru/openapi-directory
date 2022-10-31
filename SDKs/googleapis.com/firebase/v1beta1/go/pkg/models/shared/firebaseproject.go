package shared




type FirebaseProjectStateEnum string

const (
    FirebaseProjectStateEnumStateUnspecified FirebaseProjectStateEnum = "STATE_UNSPECIFIED"
FirebaseProjectStateEnumActive FirebaseProjectStateEnum = "ACTIVE"
FirebaseProjectStateEnumDeleted FirebaseProjectStateEnum = "DELETED"
)


type FirebaseProject struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    ProjectNumber *string `json:"projectNumber,omitempty"`
    Resources *DefaultResources `json:"resources,omitempty"`
    State *FirebaseProjectStateEnum `json:"state,omitempty"`
    
}

