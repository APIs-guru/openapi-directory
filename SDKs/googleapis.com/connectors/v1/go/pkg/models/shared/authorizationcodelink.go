package shared

type AuthorizationCodeLink struct {
	ClientID   *string  `json:"clientId"`
	EnablePkce *bool    `json:"enablePkce"`
	Scopes     []string `json:"scopes"`
	URI        *string  `json:"uri"`
}
