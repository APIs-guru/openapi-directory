package shared

type GeneralCommand struct {
	Arguments         map[string]string       `json:"Arguments"`
	ControllingUserID *string                 `json:"ControllingUserId"`
	Name              *GeneralCommandTypeEnum `json:"Name"`
}
