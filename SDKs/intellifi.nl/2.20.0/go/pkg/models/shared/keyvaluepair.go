package shared

type KeyValuePair struct {
	ID          *string      `json:"id"`
	KvKey       *string      `json:"kv_key"`
	KvValue     *interface{} `json:"kv_value"`
	TimeCreated *string      `json:"time_created"`
	TimeUpdated *string      `json:"time_updated"`
	URL         *string      `json:"url"`
}
