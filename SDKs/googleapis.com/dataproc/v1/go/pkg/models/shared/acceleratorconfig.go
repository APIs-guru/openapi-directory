package shared

type AcceleratorConfig struct {
	AcceleratorCount   *int32  `json:"acceleratorCount"`
	AcceleratorTypeURI *string `json:"acceleratorTypeUri"`
}
