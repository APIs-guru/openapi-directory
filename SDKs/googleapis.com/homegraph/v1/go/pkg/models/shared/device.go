package shared

// Device
// Third-party device definition. Next ID = 14
type Device struct {
	Attributes                   map[string]interface{} `json:"attributes,omitempty"`
	CustomData                   map[string]interface{} `json:"customData,omitempty"`
	DeviceInfo                   *DeviceInfo            `json:"deviceInfo,omitempty"`
	ID                           *string                `json:"id,omitempty"`
	Name                         *DeviceNames           `json:"name,omitempty"`
	NotificationSupportedByAgent *bool                  `json:"notificationSupportedByAgent,omitempty"`
	OtherDeviceIds               []AgentOtherDeviceID   `json:"otherDeviceIds,omitempty"`
	RoomHint                     *string                `json:"roomHint,omitempty"`
	StructureHint                *string                `json:"structureHint,omitempty"`
	Traits                       []string               `json:"traits,omitempty"`
	Type                         *string                `json:"type,omitempty"`
	WillReportState              *bool                  `json:"willReportState,omitempty"`
}
