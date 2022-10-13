package shared

type OAuthClientStatusEnum string

const (
	OAuthClientStatusEnumActive    OAuthClientStatusEnum = "active"
	OAuthClientStatusEnumDisabled  OAuthClientStatusEnum = "disabled"
	OAuthClientStatusEnumSuspended OAuthClientStatusEnum = "suspended"
)

type OAuthClient struct {
	ID           *string                `json:"id"`
	Label        *string                `json:"label"`
	Public       *bool                  `json:"public"`
	RedirectURI  *string                `json:"redirect_uri"`
	Secret       *string                `json:"secret"`
	Status       *OAuthClientStatusEnum `json:"status"`
	ThumbnailURL *string                `json:"thumbnail_url"`
}
