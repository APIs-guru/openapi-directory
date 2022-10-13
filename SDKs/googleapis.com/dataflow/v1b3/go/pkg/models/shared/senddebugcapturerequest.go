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
	ComponentID *string                                `json:"componentId"`
	Data        *string                                `json:"data"`
	DataFormat  *SendDebugCaptureRequestDataFormatEnum `json:"dataFormat"`
	Location    *string                                `json:"location"`
	WorkerID    *string                                `json:"workerId"`
}
