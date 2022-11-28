package shared

// GoogleFirebaseAppcheckV1betaDeviceCheckConfig
// An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch).
type GoogleFirebaseAppcheckV1betaDeviceCheckConfig struct {
	KeyID         *string `json:"keyId,omitempty"`
	Name          *string `json:"name,omitempty"`
	PrivateKey    *string `json:"privateKey,omitempty"`
	PrivateKeySet *bool   `json:"privateKeySet,omitempty"`
	TokenTTL      *string `json:"tokenTtl,omitempty"`
}
