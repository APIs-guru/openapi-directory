package shared

type SendDebugCaptureRequestDataFormatEnum string

const (
	SendDebugCaptureRequestDataFormatEnumDataFormatUnspecified SendDebugCaptureRequestDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	SendDebugCaptureRequestDataFormatEnumRaw                   SendDebugCaptureRequestDataFormatEnum = "RAW"
	SendDebugCaptureRequestDataFormatEnumJSON                  SendDebugCaptureRequestDataFormatEnum = "JSON"
	SendDebugCaptureRequestDataFormatEnumZlib                  SendDebugCaptureRequestDataFormatEnum = "ZLIB"
	SendDebugCaptureRequestDataFormatEnumBrotli                SendDebugCaptureRequestDataFormatEnum = "BROTLI"
)

// SendDebugCaptureRequest
// Request to send encoded debug information. Next ID: 8
type SendDebugCaptureRequest struct {
	ComponentID *string                                `json:"componentId,omitempty"`
	Data        *string                                `json:"data,omitempty"`
	DataFormat  *SendDebugCaptureRequestDataFormatEnum `json:"dataFormat,omitempty"`
	Location    *string                                `json:"location,omitempty"`
	WorkerID    *string                                `json:"workerId,omitempty"`
}
