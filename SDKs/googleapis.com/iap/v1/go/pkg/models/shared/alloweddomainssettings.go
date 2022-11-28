package shared

// AllowedDomainsSettings
// Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
type AllowedDomainsSettings struct {
	Domains []string `json:"domains,omitempty"`
	Enable  *bool    `json:"enable,omitempty"`
}
