package shared

type Device struct {
	Attributes                   map[string]interface{} `json:"attributes"`
	CustomData                   map[string]interface{} `json:"customData"`
	DeviceInfo                   *DeviceInfo            `json:"deviceInfo"`
	ID                           *string                `json:"id"`
	Name                         *DeviceNames           `json:"name"`
	NotificationSupportedByAgent *bool                  `json:"notificationSupportedByAgent"`
	OtherDeviceIds               []AgentOtherDeviceID   `json:"otherDeviceIds"`
	RoomHint                     *string                `json:"roomHint"`
	StructureHint                *string                `json:"structureHint"`
	Traits                       []string               `json:"traits"`
	Type                         *string                `json:"type"`
	WillReportState              *bool                  `json:"willReportState"`
}
