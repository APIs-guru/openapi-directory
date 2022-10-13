package shared

type AndroidMatrix struct {
	AndroidModelIds   []string `json:"androidModelIds"`
	AndroidVersionIds []string `json:"androidVersionIds"`
	Locales           []string `json:"locales"`
	Orientations      []string `json:"orientations"`
}
