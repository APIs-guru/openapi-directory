package shared

// AuthorizationCodeLink
// This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
type AuthorizationCodeLink struct {
	ClientID   *string  `json:"clientId,omitempty"`
	EnablePkce *bool    `json:"enablePkce,omitempty"`
	Scopes     []string `json:"scopes,omitempty"`
	URI        *string  `json:"uri,omitempty"`
}
