package shared

type SendDebugCaptureRequestDataFormatEnum string

const (
	SendDebugCaptureRequestDataFormatEnumDataFormatUnspecified SendDebugCaptureRequestDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	SendDebugCaptureRequestDataFormatEnumRaw                   SendDebugCaptureRequestDataFormatEnum = "RAW"
	SendDebugCaptureRequestDataFormatEnumJSON                  SendDebugCaptureRequestDataFormatEnum = "JSON"
	SendDebugCaptureRequestDataFormatEnumZlib                  SendDebugCaptureRequestDataFormatEnum = "ZLIB"
	SendDebugCaptureRequestDataFormatEnumBrotli                SendDebugCaptureRequestDataFormatEnum = "BROTLI"
)

type SendDebugCaptureRequest struct {
	ComponentID *string                                `json:"componentId,omitempty"`
	Data        *string                                `json:"data,omitempty"`
	DataFormat  *SendDebugCaptureRequestDataFormatEnum `json:"dataFormat,omitempty"`
	Location    *string                                `json:"location,omitempty"`
	WorkerID    *string                                `json:"workerId,omitempty"`
}
