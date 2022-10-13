package shared

type InterfaceVlan struct {
	DisplayName *string `json:"display_name"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	URL         *string `json:"url"`
	Vid         int64   `json:"vid"`
}
