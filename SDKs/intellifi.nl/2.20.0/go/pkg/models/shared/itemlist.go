package shared

type ItemListInput struct {
	Custom   *interface{}           `json:"custom,omitempty"`
	Label    *string                `json:"label,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty"`
}

type ItemList struct {
	Custom      *interface{}           `json:"custom,omitempty"`
	ID          *string                `json:"id,omitempty"`
	Label       *string                `json:"label,omitempty"`
	List        *string                `json:"list,omitempty"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
	Sha1        *string                `json:"sha1,omitempty"`
	TimeCreated *string                `json:"time_created,omitempty"`
	TimeUpdated *string                `json:"time_updated,omitempty"`
	Total       *int64                 `json:"total,omitempty"`
}
