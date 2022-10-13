package shared

type ApplicationCreated struct {
	Links    *Links              `json:"_links"`
	ID       *string             `json:"id"`
	Keys     *KeysWithPrivateKey `json:"keys"`
	Messages Messages            `json:"messages"`
	Name     string              `json:"name"`
	Voice    Voice               `json:"voice"`
}
