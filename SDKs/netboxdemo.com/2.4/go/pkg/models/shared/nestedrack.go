package shared

type NestedRack struct {
	DisplayName *string `json:"display_name"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	URL         *string `json:"url"`
}
