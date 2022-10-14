package shared

type Key struct {
	ID          *string `json:"id,omitempty"`
	IsReadOnly  *bool   `json:"is_read_only,omitempty"`
	Label       *string `json:"label,omitempty"`
	Secret      *string `json:"secret,omitempty"`
	TimeCreated *string `json:"time_created,omitempty"`
	TimeUpdated *string `json:"time_updated,omitempty"`
	URL         *string `json:"url,omitempty"`
}
