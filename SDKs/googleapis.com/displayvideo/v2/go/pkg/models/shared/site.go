package shared

// SiteInput
// A single site. Sites are apps or websites belonging to a channel.
type SiteInput struct {
	URLOrAppID *string `json:"urlOrAppId,omitempty"`
}

// Site
// A single site. Sites are apps or websites belonging to a channel.
type Site struct {
	Name       *string `json:"name,omitempty"`
	URLOrAppID *string `json:"urlOrAppId,omitempty"`
}
