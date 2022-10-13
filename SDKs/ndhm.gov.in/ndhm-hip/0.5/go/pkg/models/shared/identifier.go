package shared

type Identifier struct {
	Type  IdentifierTypeEnum `json:"type"`
	Value string             `json:"value"`
}
