package shared

type GoogleCloudDialogflowCxV3FormParameter struct {
	DefaultValue *interface{}                                        `json:"defaultValue"`
	DisplayName  *string                                             `json:"displayName"`
	EntityType   *string                                             `json:"entityType"`
	FillBehavior *GoogleCloudDialogflowCxV3FormParameterFillBehavior `json:"fillBehavior"`
	IsList       *bool                                               `json:"isList"`
	Redact       *bool                                               `json:"redact"`
	Required     *bool                                               `json:"required"`
}
