package shared

type WebAppStateEnum string

const (
	WebAppStateEnumStateUnspecified WebAppStateEnum = "STATE_UNSPECIFIED"
	WebAppStateEnumActive           WebAppStateEnum = "ACTIVE"
	WebAppStateEnumDeleted          WebAppStateEnum = "DELETED"
)

type WebApp struct {
	APIKeyID    *string          `json:"apiKeyId"`
	AppID       *string          `json:"appId"`
	AppUrls     []string         `json:"appUrls"`
	DisplayName *string          `json:"displayName"`
	Name        *string          `json:"name"`
	ProjectID   *string          `json:"projectId"`
	State       *WebAppStateEnum `json:"state"`
	WebID       *string          `json:"webId"`
}
