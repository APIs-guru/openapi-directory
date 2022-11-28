package shared

// SubstitutionRule
// A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
type SubstitutionRule struct {
	NewValue             *string     `json:"newValue,omitempty"`
	OriginalValuePattern *string     `json:"originalValuePattern,omitempty"`
	TargetGroupKinds     []GroupKind `json:"targetGroupKinds,omitempty"`
	TargetJSONPath       *string     `json:"targetJsonPath,omitempty"`
	TargetNamespaces     []string    `json:"targetNamespaces,omitempty"`
}
