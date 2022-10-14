package shared

type Options struct {
	AsyncOptions      []AsyncOptions     `json:"asyncOptions,omitempty"`
	InputMappings     []InputMapping     `json:"inputMappings,omitempty"`
	NameProperty      *string            `json:"nameProperty,omitempty"`
	ValidationOptions *ValidationOptions `json:"validationOptions,omitempty"`
}
