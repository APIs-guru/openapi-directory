package shared

type Progress struct {
	Analyzed *float64 `json:"analyzed"`
	Encoded  *float64 `json:"encoded"`
	Notified *float64 `json:"notified"`
	Uploaded *float64 `json:"uploaded"`
}
