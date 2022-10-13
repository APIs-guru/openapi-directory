package shared

type Tag struct {
	FingerPrint *string  `json:"fingerPrint"`
	Items       []string `json:"items"`
}
