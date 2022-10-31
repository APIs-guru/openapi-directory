package shared

type GoogleCloudChannelV1Parameter struct {
	Editable *bool                      `json:"editable,omitempty"`
	Name     *string                    `json:"name,omitempty"`
	Value    *GoogleCloudChannelV1Value `json:"value,omitempty"`
}
