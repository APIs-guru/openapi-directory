package shared

// GoogleFirebaseAppcheckV1betaAppAttestConfig
// An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch).
type GoogleFirebaseAppcheckV1betaAppAttestConfig struct {
	Name     *string `json:"name,omitempty"`
	TokenTTL *string `json:"tokenTtl,omitempty"`
}
