package shared

// Outage
// An outage by the Snow Monkey on a service
type Outage struct {
	DescriptorID   string `json:"descriptorId"`
	DescriptorName string `json:"descriptorName"`
	Duration       int32  `json:"duration"`
	Until          string `json:"until"`
}
