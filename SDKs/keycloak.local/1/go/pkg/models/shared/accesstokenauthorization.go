package shared

type AccessTokenAuthorization struct {
	Permissions []Permission `json:"permissions,omitempty"`
}
