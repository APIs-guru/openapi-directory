package shared

type Duration struct {
	Nanos   *int32  `json:"nanos"`
	Seconds *string `json:"seconds"`
}
