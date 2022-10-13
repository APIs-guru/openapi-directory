package shared

type AccessSelector struct {
	Permissions []string `json:"permissions"`
	Roles       []string `json:"roles"`
}
