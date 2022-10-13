package shared

type ExportPlatformEnum string

const (
	ExportPlatformEnumCoreMl     ExportPlatformEnum = "CoreML"
	ExportPlatformEnumTensorFlow ExportPlatformEnum = "TensorFlow"
)

type ExportStatusEnum string

const (
	ExportStatusEnumExporting ExportStatusEnum = "Exporting"
	ExportStatusEnumFailed    ExportStatusEnum = "Failed"
	ExportStatusEnumDone      ExportStatusEnum = "Done"
)

type Export struct {
	DownloadURI *string             `json:"DownloadUri"`
	Platform    *ExportPlatformEnum `json:"Platform"`
	Status      *ExportStatusEnum   `json:"Status"`
}
