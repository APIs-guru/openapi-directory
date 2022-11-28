package shared

// GoogleCloudChannelV1Parameter
// Definition for extended entitlement parameters.
type GoogleCloudChannelV1Parameter struct {
	Editable *bool                      `json:"editable,omitempty"`
	Name     *string                    `json:"name,omitempty"`
	Value    *GoogleCloudChannelV1Value `json:"value,omitempty"`
}

// GoogleCloudChannelV1ParameterInput
// Definition for extended entitlement parameters.
type GoogleCloudChannelV1ParameterInput struct {
	Name  *string                    `json:"name,omitempty"`
	Value *GoogleCloudChannelV1Value `json:"value,omitempty"`
}
