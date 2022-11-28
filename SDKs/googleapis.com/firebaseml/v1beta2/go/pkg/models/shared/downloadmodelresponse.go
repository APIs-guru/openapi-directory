package shared

type DownloadModelResponseModelFormatEnum string

const (
	DownloadModelResponseModelFormatEnumModelFormatUnspecified DownloadModelResponseModelFormatEnum = "MODEL_FORMAT_UNSPECIFIED"
	DownloadModelResponseModelFormatEnumTflite                 DownloadModelResponseModelFormatEnum = "TFLITE"
)

// DownloadModelResponse
// The response for downloading a model to device.
type DownloadModelResponse struct {
	DownloadURI *string                               `json:"downloadUri,omitempty"`
	ExpireTime  *string                               `json:"expireTime,omitempty"`
	ModelFormat *DownloadModelResponseModelFormatEnum `json:"modelFormat,omitempty"`
	SizeBytes   *string                               `json:"sizeBytes,omitempty"`
}
