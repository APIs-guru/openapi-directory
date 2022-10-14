package shared

type NestedDevice struct {
	DisplayName *string `json:"display_name,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	URL         *string `json:"url,omitempty"`
}
