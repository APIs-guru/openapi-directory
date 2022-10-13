package shared

type CodecProfile struct {
	ApplyConditions []ProfileCondition `json:"ApplyConditions"`
	Codec           *string            `json:"Codec"`
	Conditions      []ProfileCondition `json:"Conditions"`
	Container       *string            `json:"Container"`
	Type            *CodecTypeEnum     `json:"Type"`
}
