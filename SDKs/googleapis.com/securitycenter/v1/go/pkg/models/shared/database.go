package shared

type Database struct {
	DisplayName *string  `json:"displayName"`
	Grantees    []string `json:"grantees"`
	Name        *string  `json:"name"`
	Query       *string  `json:"query"`
	UserName    *string  `json:"userName"`
}
