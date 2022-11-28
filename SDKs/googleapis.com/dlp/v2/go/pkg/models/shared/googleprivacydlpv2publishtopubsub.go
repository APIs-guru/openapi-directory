package shared

// GooglePrivacyDlpV2PublishToPubSub
// Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk
type GooglePrivacyDlpV2PublishToPubSub struct {
	Topic *string `json:"topic,omitempty"`
}
