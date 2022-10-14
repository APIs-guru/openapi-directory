package shared

type Options struct {
	AsyncOptions      []AsyncOptions     `json:"asyncOptions,omitempty"`
	InputMappings     []InputMapping     `json:"inputMappings,omitempty"`
	ValidationOptions *ValidationOptions `json:"validationOptions,omitempty"`
	VirtualProperties *string            `json:"virtualProperties,omitempty"`
}
