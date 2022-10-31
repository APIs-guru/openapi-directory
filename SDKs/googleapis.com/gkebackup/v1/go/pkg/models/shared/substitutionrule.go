package shared



type SubstitutionRule struct {
    NewValue *string `json:"newValue,omitempty"`
    OriginalValuePattern *string `json:"originalValuePattern,omitempty"`
    TargetGroupKinds []GroupKind `json:"targetGroupKinds,omitempty"`
    TargetJSONPath *string `json:"targetJsonPath,omitempty"`
    TargetNamespaces []string `json:"targetNamespaces,omitempty"`
    
}

