package shared

type CloudStorageWorkload struct {
	DataRetrieval *Usage         `json:"dataRetrieval"`
	DataStored    *Usage         `json:"dataStored"`
	DualRegion    *DualRegional  `json:"dualRegion"`
	MultiRegion   *MultiRegional `json:"multiRegion"`
	OperationA    *Usage         `json:"operationA"`
	OperationB    *Usage         `json:"operationB"`
	Region        *Regional      `json:"region"`
	StorageClass  *string        `json:"storageClass"`
}
