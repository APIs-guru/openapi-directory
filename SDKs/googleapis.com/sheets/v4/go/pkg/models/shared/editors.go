package shared



type Editors struct {
    DomainUsersCanEdit *bool `json:"domainUsersCanEdit,omitempty"`
    Groups []string `json:"groups,omitempty"`
    Users []string `json:"users,omitempty"`
    
}

