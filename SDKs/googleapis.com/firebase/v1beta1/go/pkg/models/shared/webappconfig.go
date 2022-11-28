package shared

// WebAppConfig
// Configuration metadata of a single Firebase App for the web.
type WebAppConfig struct {
	APIKey            *string `json:"apiKey,omitempty"`
	AppID             *string `json:"appId,omitempty"`
	AuthDomain        *string `json:"authDomain,omitempty"`
	DatabaseURL       *string `json:"databaseURL,omitempty"`
	LocationID        *string `json:"locationId,omitempty"`
	MeasurementID     *string `json:"measurementId,omitempty"`
	MessagingSenderID *string `json:"messagingSenderId,omitempty"`
	ProjectID         *string `json:"projectId,omitempty"`
	StorageBucket     *string `json:"storageBucket,omitempty"`
}
