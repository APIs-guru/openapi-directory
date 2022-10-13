package shared

type Destination struct {
	Host              *string `json:"host"`
	Port              *int32  `json:"port"`
	ServiceAttachment *string `json:"serviceAttachment"`
}
