package shared

type KeyValuePair struct {
	ID          *string      `json:"id,omitempty"`
	KvKey       *string      `json:"kv_key,omitempty"`
	KvValue     *interface{} `json:"kv_value,omitempty"`
	TimeCreated *string      `json:"time_created,omitempty"`
	TimeUpdated *string      `json:"time_updated,omitempty"`
	URL         *string      `json:"url,omitempty"`
}
