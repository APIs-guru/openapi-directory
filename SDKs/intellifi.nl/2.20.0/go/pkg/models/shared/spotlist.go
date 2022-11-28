package shared

type SpotListInput struct {
	Custom   *interface{}           `json:"custom,omitempty"`
	Label    *string                `json:"label,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty"`
}

type SpotList struct {
	Custom      *interface{}           `json:"custom,omitempty"`
	ID          *string                `json:"id,omitempty"`
	Label       *string                `json:"label,omitempty"`
	List        *string                `json:"list,omitempty"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
	TimeCreated *string                `json:"time_created,omitempty"`
	TimeUpdated *string                `json:"time_updated,omitempty"`
	Total       *int64                 `json:"total,omitempty"`
}
