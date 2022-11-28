package shared

type FirebaseProjectStateEnum string

const (
	FirebaseProjectStateEnumStateUnspecified FirebaseProjectStateEnum = "STATE_UNSPECIFIED"
	FirebaseProjectStateEnumActive           FirebaseProjectStateEnum = "ACTIVE"
	FirebaseProjectStateEnumDeleted          FirebaseProjectStateEnum = "DELETED"
)

// FirebaseProject
// A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
type FirebaseProject struct {
	Annotations   map[string]string         `json:"annotations,omitempty"`
	DisplayName   *string                   `json:"displayName,omitempty"`
	Etag          *string                   `json:"etag,omitempty"`
	Name          *string                   `json:"name,omitempty"`
	ProjectID     *string                   `json:"projectId,omitempty"`
	ProjectNumber *string                   `json:"projectNumber,omitempty"`
	Resources     *DefaultResources         `json:"resources,omitempty"`
	State         *FirebaseProjectStateEnum `json:"state,omitempty"`
}
