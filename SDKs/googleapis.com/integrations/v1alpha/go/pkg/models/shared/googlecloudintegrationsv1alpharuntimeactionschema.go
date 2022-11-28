package shared

// GoogleCloudIntegrationsV1alphaRuntimeActionSchema
// Metadata of an action, including schemas for its inputs and outputs.
type GoogleCloudIntegrationsV1alphaRuntimeActionSchema struct {
	Action       *string `json:"action,omitempty"`
	InputSchema  *string `json:"inputSchema,omitempty"`
	OutputSchema *string `json:"outputSchema,omitempty"`
}
