package shared

type Measurement3d struct {
	CaptureTime *string  `json:"captureTime,omitempty"`
	X           *float32 `json:"x,omitempty"`
	Y           *float32 `json:"y,omitempty"`
	Z           *float32 `json:"z,omitempty"`
}
