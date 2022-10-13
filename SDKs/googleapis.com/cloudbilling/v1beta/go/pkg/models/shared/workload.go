package shared

type Workload struct {
	CloudStorageWorkload *CloudStorageWorkload `json:"cloudStorageWorkload"`
	ComputeVMWorkload    *ComputeVMWorkload    `json:"computeVmWorkload"`
	Name                 *string               `json:"name"`
}
