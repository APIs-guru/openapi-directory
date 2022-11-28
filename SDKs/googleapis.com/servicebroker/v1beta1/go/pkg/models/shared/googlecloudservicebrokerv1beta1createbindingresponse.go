package shared

// GoogleCloudServicebrokerV1beta1CreateBindingResponse
// Response for the `CreateBinding()` method.
type GoogleCloudServicebrokerV1beta1CreateBindingResponse struct {
	Credentials     map[string]interface{}
	Description     *string
	Operation       *string
	RouteServiceURL *string
	SyslogDrainURL  *string
	VolumeMounts    []map[string]interface{}
}
