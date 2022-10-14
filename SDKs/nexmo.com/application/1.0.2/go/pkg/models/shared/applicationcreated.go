package shared

type ApplicationCreated struct {
	Links    *Links              `json:"_links,omitempty"`
	ID       *string             `json:"id,omitempty"`
	Keys     *KeysWithPrivateKey `json:"keys,omitempty"`
	Messages Messages            `json:"messages"`
	Name     string              `json:"name"`
	Voice    Voice               `json:"voice"`
}
