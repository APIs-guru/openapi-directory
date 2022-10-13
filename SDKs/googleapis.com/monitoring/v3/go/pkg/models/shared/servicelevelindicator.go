package shared

type ServiceLevelIndicator struct {
	BasicSli     *BasicSli        `json:"basicSli"`
	RequestBased *RequestBasedSli `json:"requestBased"`
	WindowsBased *WindowsBasedSli `json:"windowsBased"`
}
