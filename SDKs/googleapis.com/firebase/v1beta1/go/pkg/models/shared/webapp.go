package shared




type WebAppStateEnum string

const (
    WebAppStateEnumStateUnspecified WebAppStateEnum = "STATE_UNSPECIFIED"
WebAppStateEnumActive WebAppStateEnum = "ACTIVE"
WebAppStateEnumDeleted WebAppStateEnum = "DELETED"
)


type WebApp struct {
    APIKeyID *string `json:"apiKeyId,omitempty"`
    AppID *string `json:"appId,omitempty"`
    AppUrls []string `json:"appUrls,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    State *WebAppStateEnum `json:"state,omitempty"`
    WebID *string `json:"webId,omitempty"`
    
}

