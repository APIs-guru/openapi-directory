package shared

// NiRealtimeData
// Real time data about the `number`
type NiRealtimeData struct {
	ActiveStatus  *string `json:"active_status,omitempty"`
	HandsetStatus *string `json:"handset_status,omitempty"`
}
