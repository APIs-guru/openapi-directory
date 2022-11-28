package shared

// CloudPubsubTopic
// A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
type CloudPubsubTopic struct {
	TopicName *string `json:"topicName,omitempty"`
}
