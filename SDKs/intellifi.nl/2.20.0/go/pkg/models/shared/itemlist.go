package shared

type ItemList struct {
	Custom      *interface{}           `json:"custom"`
	ID          *string                `json:"id"`
	Label       *string                `json:"label"`
	List        *string                `json:"list"`
	Metadata    map[string]interface{} `json:"metadata"`
	Sha1        *string                `json:"sha1"`
	TimeCreated *string                `json:"time_created"`
	TimeUpdated *string                `json:"time_updated"`
	Total       *int64                 `json:"total"`
}
