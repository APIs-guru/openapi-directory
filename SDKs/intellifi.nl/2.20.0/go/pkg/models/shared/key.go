package shared

type Key struct {
	ID          *string `json:"id"`
	IsReadOnly  *bool   `json:"is_read_only"`
	Label       *string `json:"label"`
	Secret      *string `json:"secret"`
	TimeCreated *string `json:"time_created"`
	TimeUpdated *string `json:"time_updated"`
	URL         *string `json:"url"`
}
