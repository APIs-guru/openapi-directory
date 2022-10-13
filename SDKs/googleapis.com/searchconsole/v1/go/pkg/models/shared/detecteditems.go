package shared

type DetectedItems struct {
	Items          []Item  `json:"items"`
	RichResultType *string `json:"richResultType"`
}
