package shared

type NewDiskInitializeParams struct {
	DiskSizeGb  *string `json:"diskSizeGb"`
	DiskType    *string `json:"diskType"`
	SourceImage *string `json:"sourceImage"`
}
