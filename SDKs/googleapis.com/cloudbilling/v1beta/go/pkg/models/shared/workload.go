package shared



type Workload struct {
    CloudStorageWorkload *CloudStorageWorkload `json:"cloudStorageWorkload,omitempty"`
    ComputeVMWorkload *ComputeVMWorkload `json:"computeVmWorkload,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

