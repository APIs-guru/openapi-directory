package shared

type Options struct {
	AsyncOptions      []AsyncOptions     `json:"asyncOptions"`
	InputMappings     []InputMapping     `json:"inputMappings"`
	ValidationOptions *ValidationOptions `json:"validationOptions"`
	VirtualProperties *string            `json:"virtualProperties"`
}
