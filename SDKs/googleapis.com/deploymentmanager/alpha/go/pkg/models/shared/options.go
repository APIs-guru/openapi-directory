package shared

type Options struct {
	AsyncOptions      []AsyncOptions     `json:"asyncOptions"`
	InputMappings     []InputMapping     `json:"inputMappings"`
	NameProperty      *string            `json:"nameProperty"`
	ValidationOptions *ValidationOptions `json:"validationOptions"`
}
