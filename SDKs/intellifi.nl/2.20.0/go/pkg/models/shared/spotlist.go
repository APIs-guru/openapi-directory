package shared

type SpotList struct {
	Custom      *interface{}           `json:"custom"`
	ID          *string                `json:"id"`
	Label       *string                `json:"label"`
	List        *string                `json:"list"`
	Metadata    map[string]interface{} `json:"metadata"`
	TimeCreated *string                `json:"time_created"`
	TimeUpdated *string                `json:"time_updated"`
	Total       *int64                 `json:"total"`
}
