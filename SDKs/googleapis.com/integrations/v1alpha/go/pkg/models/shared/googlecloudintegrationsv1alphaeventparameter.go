package shared

// GoogleCloudIntegrationsV1alphaEventParameter
// This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
type GoogleCloudIntegrationsV1alphaEventParameter struct {
	Key   *string                                  `json:"key,omitempty"`
	Value *GoogleCloudIntegrationsV1alphaValueType `json:"value,omitempty"`
}
