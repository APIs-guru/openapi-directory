package shared

type QueryAccessibleDataRequest struct {
	GcsDestination     *GoogleCloudHealthcareV1ConsentGcsDestination `json:"gcsDestination"`
	RequestAttributes  map[string]string                             `json:"requestAttributes"`
	ResourceAttributes map[string]string                             `json:"resourceAttributes"`
}
