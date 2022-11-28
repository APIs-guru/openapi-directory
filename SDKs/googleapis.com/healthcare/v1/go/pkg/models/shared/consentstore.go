package shared

// ConsentStore
// Represents a consent store.
type ConsentStore struct {
	DefaultConsentTTL           *string           `json:"defaultConsentTtl,omitempty"`
	EnableConsentCreateOnUpdate *bool             `json:"enableConsentCreateOnUpdate,omitempty"`
	Labels                      map[string]string `json:"labels,omitempty"`
	Name                        *string           `json:"name,omitempty"`
}
