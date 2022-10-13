package shared

type FetchInventoryResponse struct {
	NextPageToken *string           `json:"nextPageToken"`
	UpdateTime    *string           `json:"updateTime"`
	VmwareVms     *VmwareVmsDetails `json:"vmwareVms"`
}
