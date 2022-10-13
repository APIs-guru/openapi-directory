package shared

type ClientInfo struct {
	ClientInfoDetails []ClientInfoDetail `json:"clientInfoDetails"`
	Name              *string            `json:"name"`
}
