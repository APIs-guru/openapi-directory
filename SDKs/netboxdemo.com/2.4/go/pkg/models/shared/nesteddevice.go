package shared

type NestedDevice struct {
	DisplayName *string `json:"display_name"`
	ID          *int64  `json:"id"`
	Name        *string `json:"name"`
	URL         *string `json:"url"`
}
