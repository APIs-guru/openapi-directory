package shared

type CustomClass struct {
	CustomClassID *string     `json:"customClassId,omitempty"`
	Items         []ClassItem `json:"items,omitempty"`
	Name          *string     `json:"name,omitempty"`
}
