package shared

type Application struct {
	Links    *Links   `json:"_links"`
	ID       *string  `json:"id"`
	Keys     *Keys    `json:"keys"`
	Messages Messages `json:"messages"`
	Name     string   `json:"name"`
	Voice    Voice    `json:"voice"`
}
