package shared

type CustomClass struct {
	CustomClassID *string     `json:"customClassId"`
	Items         []ClassItem `json:"items"`
	Name          *string     `json:"name"`
}
