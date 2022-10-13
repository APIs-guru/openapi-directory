package shared

type GoogleCloudDialogflowCxV3beta1FormParameter struct {
	DefaultValue *interface{}                                             `json:"defaultValue"`
	DisplayName  *string                                                  `json:"displayName"`
	EntityType   *string                                                  `json:"entityType"`
	FillBehavior *GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior `json:"fillBehavior"`
	IsList       *bool                                                    `json:"isList"`
	Redact       *bool                                                    `json:"redact"`
	Required     *bool                                                    `json:"required"`
}
