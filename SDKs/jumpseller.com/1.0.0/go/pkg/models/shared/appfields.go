package shared

type AppFields struct {
	Author      *string `json:"author"`
	Code        *string `json:"code"`
	Description *string `json:"description"`
	Js          *bool   `json:"js"`
	Name        *string `json:"name"`
	Page        *string `json:"page"`
}
