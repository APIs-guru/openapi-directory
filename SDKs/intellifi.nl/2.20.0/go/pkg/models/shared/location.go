package shared

type Location struct {
	Custom      *interface{}           `json:"custom"`
	ID          *string                `json:"id"`
	Label       *string                `json:"label"`
	Metadata    map[string]interface{} `json:"metadata"`
	TimeCreated *string                `json:"time_created"`
	TimeUpdated *string                `json:"time_updated"`
	URL         *string                `json:"url"`
}
