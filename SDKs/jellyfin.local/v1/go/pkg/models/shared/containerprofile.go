package shared

type ContainerProfile struct {
	Conditions []ProfileCondition   `json:"Conditions,omitempty"`
	Container  *string              `json:"Container,omitempty"`
	Type       *DlnaProfileTypeEnum `json:"Type,omitempty"`
}
