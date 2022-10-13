package shared

type DatasetTemplate struct {
	DatasetIDPrefix *string `json:"datasetIdPrefix"`
	KmsKeyName      *string `json:"kmsKeyName"`
	Location        *string `json:"location"`
}
