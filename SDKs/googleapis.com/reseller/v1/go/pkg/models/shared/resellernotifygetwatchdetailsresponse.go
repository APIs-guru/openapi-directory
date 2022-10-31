package shared

type ResellernotifyGetwatchdetailsResponse struct {
	ServiceAccountEmailAddresses []string `json:"serviceAccountEmailAddresses,omitempty"`
	TopicName                    *string  `json:"topicName,omitempty"`
}
