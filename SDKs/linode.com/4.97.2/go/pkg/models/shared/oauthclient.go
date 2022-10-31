package shared




type OAuthClientStatusEnum string

const (
    OAuthClientStatusEnumActive OAuthClientStatusEnum = "active"
OAuthClientStatusEnumDisabled OAuthClientStatusEnum = "disabled"
OAuthClientStatusEnumSuspended OAuthClientStatusEnum = "suspended"
)


type OAuthClient struct {
    ID *string `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Public *bool `json:"public,omitempty"`
    RedirectURI *string `json:"redirect_uri,omitempty"`
    Secret *string `json:"secret,omitempty"`
    Status *OAuthClientStatusEnum `json:"status,omitempty"`
    ThumbnailURL *string `json:"thumbnail_url,omitempty"`
    
}

