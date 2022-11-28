package shared

// MessageStoragePolicy
// A policy constraining the storage of messages published to the topic.
type MessageStoragePolicy struct {
	AllowedPersistenceRegions []string `json:"allowedPersistenceRegions,omitempty"`
}
