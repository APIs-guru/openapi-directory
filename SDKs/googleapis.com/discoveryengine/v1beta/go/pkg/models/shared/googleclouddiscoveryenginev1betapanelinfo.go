package shared

// GoogleCloudDiscoveryengineV1betaPanelInfo
// Detailed panel information associated with a user event.
type GoogleCloudDiscoveryengineV1betaPanelInfo struct {
	DisplayName   *string `json:"displayName,omitempty"`
	PanelID       *string `json:"panelId,omitempty"`
	PanelPosition *int32  `json:"panelPosition,omitempty"`
	TotalPanels   *int32  `json:"totalPanels,omitempty"`
}
