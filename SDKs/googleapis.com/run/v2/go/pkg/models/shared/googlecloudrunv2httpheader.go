package shared

// GoogleCloudRunV2HTTPHeader
// HTTPHeader describes a custom header to be used in HTTP probes
type GoogleCloudRunV2HTTPHeader struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
