package shared

type DefaultResources struct {
	HostingSite              *string `json:"hostingSite,omitempty"`
	LocationID               *string `json:"locationId,omitempty"`
	RealtimeDatabaseInstance *string `json:"realtimeDatabaseInstance,omitempty"`
	StorageBucket            *string `json:"storageBucket,omitempty"`
}
