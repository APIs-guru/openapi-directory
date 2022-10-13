package shared

type ServiceAccount struct {
	Description    *string `json:"description"`
	Disabled       *bool   `json:"disabled"`
	DisplayName    *string `json:"displayName"`
	Email          *string `json:"email"`
	Etag           *string `json:"etag"`
	Name           *string `json:"name"`
	Oauth2ClientID *string `json:"oauth2ClientId"`
	ProjectID      *string `json:"projectId"`
	UniqueID       *string `json:"uniqueId"`
}
