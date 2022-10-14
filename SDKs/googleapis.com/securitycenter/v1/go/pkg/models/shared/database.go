package shared

type Database struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Grantees    []string `json:"grantees,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Query       *string  `json:"query,omitempty"`
	UserName    *string  `json:"userName,omitempty"`
}
