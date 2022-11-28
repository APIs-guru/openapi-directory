package shared

type OAuthClientStatusEnum string

const (
	OAuthClientStatusEnumActive    OAuthClientStatusEnum = "active"
	OAuthClientStatusEnumDisabled  OAuthClientStatusEnum = "disabled"
	OAuthClientStatusEnumSuspended OAuthClientStatusEnum = "suspended"
)

// OAuthClientInput
// A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
type OAuthClientInput struct {
	Label       *string `json:"label,omitempty"`
	RedirectURI *string `json:"redirect_uri,omitempty"`
}

// OAuthClient
// A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
type OAuthClient struct {
	ID           *string                `json:"id,omitempty"`
	Label        *string                `json:"label,omitempty"`
	Public       *bool                  `json:"public,omitempty"`
	RedirectURI  *string                `json:"redirect_uri,omitempty"`
	Secret       *string                `json:"secret,omitempty"`
	Status       *OAuthClientStatusEnum `json:"status,omitempty"`
	ThumbnailURL *string                `json:"thumbnail_url,omitempty"`
}
