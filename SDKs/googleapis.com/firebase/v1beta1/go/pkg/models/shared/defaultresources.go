package shared

type DefaultResources struct {
	HostingSite              *string `json:"hostingSite"`
	LocationID               *string `json:"locationId"`
	RealtimeDatabaseInstance *string `json:"realtimeDatabaseInstance"`
	StorageBucket            *string `json:"storageBucket"`
}
