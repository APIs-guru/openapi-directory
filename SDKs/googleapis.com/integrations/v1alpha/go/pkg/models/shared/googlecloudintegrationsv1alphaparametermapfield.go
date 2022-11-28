package shared

// GoogleCloudIntegrationsV1alphaParameterMapField
// Field represents either the key or value in an entry.
type GoogleCloudIntegrationsV1alphaParameterMapField struct {
	LiteralValue *GoogleCloudIntegrationsV1alphaValueType `json:"literalValue,omitempty"`
	ReferenceKey *string                                  `json:"referenceKey,omitempty"`
}
