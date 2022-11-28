package shared

// GoogleCloudDatalabelingV1beta1ImportDataRequest
// Request message for ImportData API.
type GoogleCloudDatalabelingV1beta1ImportDataRequest struct {
	InputConfig      *GoogleCloudDatalabelingV1beta1InputConfig `json:"inputConfig,omitempty"`
	UserEmailAddress *string                                    `json:"userEmailAddress,omitempty"`
}
