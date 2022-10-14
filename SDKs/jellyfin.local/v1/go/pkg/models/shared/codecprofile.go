package shared

type CodecProfile struct {
	ApplyConditions []ProfileCondition `json:"ApplyConditions,omitempty"`
	Codec           *string            `json:"Codec,omitempty"`
	Conditions      []ProfileCondition `json:"Conditions,omitempty"`
	Container       *string            `json:"Container,omitempty"`
	Type            *CodecTypeEnum     `json:"Type,omitempty"`
}
