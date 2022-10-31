package shared

type Permission struct {
	Claims map[string]interface{} `json:"claims,omitempty"`
	Rsid   *string                `json:"rsid,omitempty"`
	Rsname *string                `json:"rsname,omitempty"`
	Scopes []string               `json:"scopes,omitempty"`
}
