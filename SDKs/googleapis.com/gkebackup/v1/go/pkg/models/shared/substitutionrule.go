package shared

type SubstitutionRule struct {
	NewValue             *string     `json:"newValue"`
	OriginalValuePattern *string     `json:"originalValuePattern"`
	TargetGroupKinds     []GroupKind `json:"targetGroupKinds"`
	TargetJSONPath       *string     `json:"targetJsonPath"`
	TargetNamespaces     []string    `json:"targetNamespaces"`
}
