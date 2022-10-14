package shared

type AppFields struct {
	Author      *string `json:"author,omitempty"`
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Js          *bool   `json:"js,omitempty"`
	Name        *string `json:"name,omitempty"`
	Page        *string `json:"page,omitempty"`
}
