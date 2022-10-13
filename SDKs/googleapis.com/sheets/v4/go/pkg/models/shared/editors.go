package shared

type Editors struct {
	DomainUsersCanEdit *bool    `json:"domainUsersCanEdit"`
	Groups             []string `json:"groups"`
	Users              []string `json:"users"`
}
