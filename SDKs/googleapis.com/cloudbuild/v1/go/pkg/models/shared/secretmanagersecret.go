package shared

type SecretManagerSecret struct {
	Env         *string `json:"env"`
	VersionName *string `json:"versionName"`
}
