package shared

type AndroidAppStateEnum string

const (
	AndroidAppStateEnumStateUnspecified AndroidAppStateEnum = "STATE_UNSPECIFIED"
	AndroidAppStateEnumActive           AndroidAppStateEnum = "ACTIVE"
	AndroidAppStateEnumDeleted          AndroidAppStateEnum = "DELETED"
)

// AndroidApp
// Details of a Firebase App for Android.
type AndroidApp struct {
	APIKeyID     *string              `json:"apiKeyId,omitempty"`
	AppID        *string              `json:"appId,omitempty"`
	DisplayName  *string              `json:"displayName,omitempty"`
	Name         *string              `json:"name,omitempty"`
	PackageName  *string              `json:"packageName,omitempty"`
	ProjectID    *string              `json:"projectId,omitempty"`
	Sha1Hashes   []string             `json:"sha1Hashes,omitempty"`
	Sha256Hashes []string             `json:"sha256Hashes,omitempty"`
	State        *AndroidAppStateEnum `json:"state,omitempty"`
}

// AndroidAppInput
// Details of a Firebase App for Android.
type AndroidAppInput struct {
	APIKeyID     *string  `json:"apiKeyId,omitempty"`
	DisplayName  *string  `json:"displayName,omitempty"`
	Name         *string  `json:"name,omitempty"`
	PackageName  *string  `json:"packageName,omitempty"`
	Sha1Hashes   []string `json:"sha1Hashes,omitempty"`
	Sha256Hashes []string `json:"sha256Hashes,omitempty"`
}
