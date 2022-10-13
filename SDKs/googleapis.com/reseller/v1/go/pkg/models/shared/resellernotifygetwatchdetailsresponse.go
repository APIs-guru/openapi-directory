package shared

type ResellernotifyGetwatchdetailsResponse struct {
	ServiceAccountEmailAddresses []string `json:"serviceAccountEmailAddresses"`
	TopicName                    *string  `json:"topicName"`
}
