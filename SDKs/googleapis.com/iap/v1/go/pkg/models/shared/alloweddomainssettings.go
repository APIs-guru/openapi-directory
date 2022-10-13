package shared

type AllowedDomainsSettings struct {
	Domains []string `json:"domains"`
	Enable  *bool    `json:"enable"`
}
