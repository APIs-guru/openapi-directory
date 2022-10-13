package shared

type AndroidAppStateEnum string

const (
	AndroidAppStateEnumStateUnspecified AndroidAppStateEnum = "STATE_UNSPECIFIED"
	AndroidAppStateEnumActive           AndroidAppStateEnum = "ACTIVE"
	AndroidAppStateEnumDeleted          AndroidAppStateEnum = "DELETED"
)

type AndroidApp struct {
	APIKeyID     *string              `json:"apiKeyId"`
	AppID        *string              `json:"appId"`
	DisplayName  *string              `json:"displayName"`
	Name         *string              `json:"name"`
	PackageName  *string              `json:"packageName"`
	ProjectID    *string              `json:"projectId"`
	Sha1Hashes   []string             `json:"sha1Hashes"`
	Sha256Hashes []string             `json:"sha256Hashes"`
	State        *AndroidAppStateEnum `json:"state"`
}
