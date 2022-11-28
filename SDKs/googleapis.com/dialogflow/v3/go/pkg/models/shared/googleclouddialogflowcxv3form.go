package shared

// GoogleCloudDialogflowCxV3Form
// A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
type GoogleCloudDialogflowCxV3Form struct {
	Parameters []GoogleCloudDialogflowCxV3FormParameter `json:"parameters,omitempty"`
}

// GoogleCloudDialogflowCxV3FormInput
// A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
type GoogleCloudDialogflowCxV3FormInput struct {
	Parameters []GoogleCloudDialogflowCxV3FormParameterInput `json:"parameters,omitempty"`
}
