package shared

type GeneralCommand struct {
	Arguments         map[string]string       `json:"Arguments,omitempty"`
	ControllingUserID *string                 `json:"ControllingUserId,omitempty"`
	Name              *GeneralCommandTypeEnum `json:"Name,omitempty"`
}
