package shared

// FetchInventoryResponse
// Response message for fetchInventory.
type FetchInventoryResponse struct {
	AwsVms        *AwsVmsDetails    `json:"awsVms,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
	UpdateTime    *string           `json:"updateTime,omitempty"`
	VmwareVms     *VmwareVmsDetails `json:"vmwareVms,omitempty"`
}
