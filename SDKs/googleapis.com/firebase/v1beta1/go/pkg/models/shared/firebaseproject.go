package shared

type FirebaseProjectStateEnum string

const (
	FirebaseProjectStateEnumStateUnspecified FirebaseProjectStateEnum = "STATE_UNSPECIFIED"
	FirebaseProjectStateEnumActive           FirebaseProjectStateEnum = "ACTIVE"
	FirebaseProjectStateEnumDeleted          FirebaseProjectStateEnum = "DELETED"
)

type FirebaseProject struct {
	Annotations   map[string]string         `json:"annotations"`
	DisplayName   *string                   `json:"displayName"`
	Etag          *string                   `json:"etag"`
	Name          *string                   `json:"name"`
	ProjectID     *string                   `json:"projectId"`
	ProjectNumber *string                   `json:"projectNumber"`
	Resources     *DefaultResources         `json:"resources"`
	State         *FirebaseProjectStateEnum `json:"state"`
}
