package shared

type Image struct {
	Content *string      `json:"content"`
	Source  *ImageSource `json:"source"`
}
