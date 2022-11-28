package shared

// GoogleCloudServicebrokerV1beta1GetBindingResponse
// Response for the `GetBinding()` method.
type GoogleCloudServicebrokerV1beta1GetBindingResponse struct {
	Credentials     map[string]interface{}
	DeploymentName  *string
	Description     *string
	ResourceName    *string
	RouteServiceURL *string
	SyslogDrainURL  *string
	VolumeMounts    []map[string]interface{}
}
