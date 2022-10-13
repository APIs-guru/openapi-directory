package shared

type DownloadModelResponseModelFormatEnum string

const (
	DownloadModelResponseModelFormatEnumModelFormatUnspecified DownloadModelResponseModelFormatEnum = "MODEL_FORMAT_UNSPECIFIED"
	DownloadModelResponseModelFormatEnumTflite                 DownloadModelResponseModelFormatEnum = "TFLITE"
)

type DownloadModelResponse struct {
	DownloadURI *string                               `json:"downloadUri"`
	ExpireTime  *string                               `json:"expireTime"`
	ModelFormat *DownloadModelResponseModelFormatEnum `json:"modelFormat"`
	SizeBytes   *string                               `json:"sizeBytes"`
}
