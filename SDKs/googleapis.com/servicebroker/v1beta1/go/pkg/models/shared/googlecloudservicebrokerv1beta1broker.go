package shared

// GoogleCloudServicebrokerV1beta1Broker
// Broker represents a consumable collection of Service Registry catalogs
// exposed as an OSB Broker.
type GoogleCloudServicebrokerV1beta1Broker struct {
	CreateTime *string `json:"createTime,omitempty"`
	Name       *string `json:"name,omitempty"`
	Title      *string `json:"title,omitempty"`
	URL        *string `json:"url,omitempty"`
}
