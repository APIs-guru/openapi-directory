package shared

type Identifier struct {
	Type  *IdentifierTypeEnum `json:"type,omitempty"`
	Value *string             `json:"value,omitempty"`
}
