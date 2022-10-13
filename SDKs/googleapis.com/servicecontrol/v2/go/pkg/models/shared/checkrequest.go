package shared

type CheckRequest struct {
	Attributes      *AttributeContext `json:"attributes"`
	Flags           *string           `json:"flags"`
	Resources       []ResourceInfo    `json:"resources"`
	ServiceConfigID *string           `json:"serviceConfigId"`
}
