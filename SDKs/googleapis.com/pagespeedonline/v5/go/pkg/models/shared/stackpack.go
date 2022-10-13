package shared

type StackPack struct {
	Descriptions map[string]string `json:"descriptions"`
	IconDataURL  *string           `json:"iconDataURL"`
	ID           *string           `json:"id"`
	Title        *string           `json:"title"`
}
