package shared



type CloudStorageWorkload struct {
    DataRetrieval *Usage `json:"dataRetrieval,omitempty"`
    DataStored *Usage `json:"dataStored,omitempty"`
    DualRegion *DualRegional `json:"dualRegion,omitempty"`
    MultiRegion *MultiRegional `json:"multiRegion,omitempty"`
    OperationA *Usage `json:"operationA,omitempty"`
    OperationB *Usage `json:"operationB,omitempty"`
    Region *Regional `json:"region,omitempty"`
    StorageClass *string `json:"storageClass,omitempty"`
    
}

