package shared

// GoogleCloudDialogflowCxV3beta1FormParameter
// Represents a form parameter.
type GoogleCloudDialogflowCxV3beta1FormParameter struct {
	DefaultValue *interface{}                                             `json:"defaultValue,omitempty"`
	DisplayName  *string                                                  `json:"displayName,omitempty"`
	EntityType   *string                                                  `json:"entityType,omitempty"`
	FillBehavior *GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior `json:"fillBehavior,omitempty"`
	IsList       *bool                                                    `json:"isList,omitempty"`
	Redact       *bool                                                    `json:"redact,omitempty"`
	Required     *bool                                                    `json:"required,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1FormParameterInput
// Represents a form parameter.
type GoogleCloudDialogflowCxV3beta1FormParameterInput struct {
	DefaultValue *interface{}                                                  `json:"defaultValue,omitempty"`
	DisplayName  *string                                                       `json:"displayName,omitempty"`
	EntityType   *string                                                       `json:"entityType,omitempty"`
	FillBehavior *GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput `json:"fillBehavior,omitempty"`
	IsList       *bool                                                         `json:"isList,omitempty"`
	Redact       *bool                                                         `json:"redact,omitempty"`
	Required     *bool                                                         `json:"required,omitempty"`
}
