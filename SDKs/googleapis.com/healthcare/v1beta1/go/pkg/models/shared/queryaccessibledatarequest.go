package shared

type QueryAccessibleDataRequest struct {
	GcsDestination     *GoogleCloudHealthcareV1beta1ConsentGcsDestination `json:"gcsDestination,omitempty"`
	RequestAttributes  map[string]string                                  `json:"requestAttributes,omitempty"`
	ResourceAttributes map[string]string                                  `json:"resourceAttributes,omitempty"`
}
