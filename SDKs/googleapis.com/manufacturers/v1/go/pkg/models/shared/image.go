package shared

type ImageStatusEnum string

const (
	ImageStatusEnumStatusUnspecified ImageStatusEnum = "STATUS_UNSPECIFIED"
	ImageStatusEnumPendingProcessing ImageStatusEnum = "PENDING_PROCESSING"
	ImageStatusEnumPendingCrawl      ImageStatusEnum = "PENDING_CRAWL"
	ImageStatusEnumOk                ImageStatusEnum = "OK"
	ImageStatusEnumRoboted           ImageStatusEnum = "ROBOTED"
	ImageStatusEnumXroboted          ImageStatusEnum = "XROBOTED"
	ImageStatusEnumCrawlError        ImageStatusEnum = "CRAWL_ERROR"
	ImageStatusEnumProcessingError   ImageStatusEnum = "PROCESSING_ERROR"
	ImageStatusEnumDecodingError     ImageStatusEnum = "DECODING_ERROR"
	ImageStatusEnumTooBig            ImageStatusEnum = "TOO_BIG"
	ImageStatusEnumCrawlSkipped      ImageStatusEnum = "CRAWL_SKIPPED"
	ImageStatusEnumHostloaded        ImageStatusEnum = "HOSTLOADED"
	ImageStatusEnumHttp404           ImageStatusEnum = "HTTP_404"
)

type ImageTypeEnum string

const (
	ImageTypeEnumTypeUnspecified ImageTypeEnum = "TYPE_UNSPECIFIED"
	ImageTypeEnumCrawled         ImageTypeEnum = "CRAWLED"
	ImageTypeEnumUploaded        ImageTypeEnum = "UPLOADED"
)

type Image struct {
	ImageURL *string          `json:"imageUrl"`
	Status   *ImageStatusEnum `json:"status"`
	Type     *ImageTypeEnum   `json:"type"`
}
