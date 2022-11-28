package shared

// DefaultResources
// The default resources associated with the Project.
type DefaultResources struct {
	HostingSite              *string `json:"hostingSite,omitempty"`
	LocationID               *string `json:"locationId,omitempty"`
	RealtimeDatabaseInstance *string `json:"realtimeDatabaseInstance,omitempty"`
	StorageBucket            *string `json:"storageBucket,omitempty"`
}
