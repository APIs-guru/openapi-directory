package shared

type WebAppConfig struct {
	APIKey            *string `json:"apiKey"`
	AppID             *string `json:"appId"`
	AuthDomain        *string `json:"authDomain"`
	DatabaseURL       *string `json:"databaseURL"`
	LocationID        *string `json:"locationId"`
	MeasurementID     *string `json:"measurementId"`
	MessagingSenderID *string `json:"messagingSenderId"`
	ProjectID         *string `json:"projectId"`
	StorageBucket     *string `json:"storageBucket"`
}
