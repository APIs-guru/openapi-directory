package shared

// ResellernotifyGetwatchdetailsResponse
// JSON template for resellernotify getwatchdetails response.
type ResellernotifyGetwatchdetailsResponse struct {
	ServiceAccountEmailAddresses []string `json:"serviceAccountEmailAddresses,omitempty"`
	TopicName                    *string  `json:"topicName,omitempty"`
}
