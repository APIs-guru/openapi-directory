package shared

type Permission struct {
	Claims map[string]interface{} `json:"claims"`
	Rsid   *string                `json:"rsid"`
	Rsname *string                `json:"rsname"`
	Scopes []string               `json:"scopes"`
}
