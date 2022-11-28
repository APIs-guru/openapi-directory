package shared

// GoogleCloudServicebrokerV1alpha1GetBindingResponse
// Response for the `GetBinding()` method.
type GoogleCloudServicebrokerV1alpha1GetBindingResponse struct {
	Credentials     map[string]interface{}
	Description     *string
	RouteServiceURL *string
	SyslogDrainURL  *string
	VolumeMounts    []map[string]interface{}
}
