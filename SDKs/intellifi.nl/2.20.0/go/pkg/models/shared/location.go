package shared

type LocationInput struct {
	Custom   *interface{}           `json:"custom,omitempty"`
	Label    *string                `json:"label,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty"`
}

type Location struct {
	Custom      *interface{}           `json:"custom,omitempty"`
	ID          *string                `json:"id,omitempty"`
	Label       *string                `json:"label,omitempty"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
	TimeCreated *string                `json:"time_created,omitempty"`
	TimeUpdated *string                `json:"time_updated,omitempty"`
	URL         *string                `json:"url,omitempty"`
}
