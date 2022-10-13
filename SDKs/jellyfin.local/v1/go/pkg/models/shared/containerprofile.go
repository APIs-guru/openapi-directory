package shared

type ContainerProfile struct {
	Conditions []ProfileCondition   `json:"Conditions"`
	Container  *string              `json:"Container"`
	Type       *DlnaProfileTypeEnum `json:"Type"`
}
