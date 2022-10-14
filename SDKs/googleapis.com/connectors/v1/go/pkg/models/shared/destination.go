package shared

type Destination struct {
	Host              *string `json:"host,omitempty"`
	Port              *int32  `json:"port,omitempty"`
	ServiceAttachment *string `json:"serviceAttachment,omitempty"`
}
