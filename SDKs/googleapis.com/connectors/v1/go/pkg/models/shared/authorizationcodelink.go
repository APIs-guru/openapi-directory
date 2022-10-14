package shared

type AuthorizationCodeLink struct {
	ClientID   *string  `json:"clientId,omitempty"`
	EnablePkce *bool    `json:"enablePkce,omitempty"`
	Scopes     []string `json:"scopes,omitempty"`
	URI        *string  `json:"uri,omitempty"`
}
