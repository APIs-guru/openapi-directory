package shared

type Measurement3d struct {
	CaptureTime *string  `json:"captureTime"`
	X           *float32 `json:"x"`
	Y           *float32 `json:"y"`
	Z           *float32 `json:"z"`
}
