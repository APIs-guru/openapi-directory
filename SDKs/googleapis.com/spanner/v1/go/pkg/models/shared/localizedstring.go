package shared

type LocalizedString struct {
	Args    map[string]string `json:"args"`
	Message *string           `json:"message"`
	Token   *string           `json:"token"`
}
