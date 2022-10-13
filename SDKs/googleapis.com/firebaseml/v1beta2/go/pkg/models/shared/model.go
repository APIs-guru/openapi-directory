package shared

type Model struct {
	ActiveOperations []Operation  `json:"activeOperations"`
	CreateTime       *string      `json:"createTime"`
	DisplayName      *string      `json:"displayName"`
	Etag             *string      `json:"etag"`
	ModelHash        *string      `json:"modelHash"`
	Name             *string      `json:"name"`
	State            *ModelState  `json:"state"`
	Tags             []string     `json:"tags"`
	TfliteModel      *TfLiteModel `json:"tfliteModel"`
	UpdateTime       *string      `json:"updateTime"`
}
