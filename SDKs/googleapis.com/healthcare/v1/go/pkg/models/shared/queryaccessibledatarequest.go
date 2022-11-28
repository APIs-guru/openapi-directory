package shared

// QueryAccessibleDataRequest
// Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).
type QueryAccessibleDataRequest struct {
	GcsDestination     *GoogleCloudHealthcareV1ConsentGcsDestination `json:"gcsDestination,omitempty"`
	RequestAttributes  map[string]string                             `json:"requestAttributes,omitempty"`
	ResourceAttributes map[string]string                             `json:"resourceAttributes,omitempty"`
}
