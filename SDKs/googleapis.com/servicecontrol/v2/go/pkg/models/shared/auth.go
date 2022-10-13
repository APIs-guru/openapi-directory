package shared

type Auth struct {
	AccessLevels []string               `json:"accessLevels"`
	Audiences    []string               `json:"audiences"`
	Claims       map[string]interface{} `json:"claims"`
	Presenter    *string                `json:"presenter"`
	Principal    *string                `json:"principal"`
}
