package shared

// SecretManagerSecret
// Pairs a secret environment variable with a SecretVersion in Secret Manager.
type SecretManagerSecret struct {
	Env         *string `json:"env,omitempty"`
	VersionName *string `json:"versionName,omitempty"`
}
