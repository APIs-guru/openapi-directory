package shared

type ImageCreateResultStatusEnum string

const (
	ImageCreateResultStatusEnumOk                  ImageCreateResultStatusEnum = "OK"
	ImageCreateResultStatusEnumOkDuplicate         ImageCreateResultStatusEnum = "OKDuplicate"
	ImageCreateResultStatusEnumErrorSource         ImageCreateResultStatusEnum = "ErrorSource"
	ImageCreateResultStatusEnumErrorImageFormat    ImageCreateResultStatusEnum = "ErrorImageFormat"
	ImageCreateResultStatusEnumErrorImageSize      ImageCreateResultStatusEnum = "ErrorImageSize"
	ImageCreateResultStatusEnumErrorStorage        ImageCreateResultStatusEnum = "ErrorStorage"
	ImageCreateResultStatusEnumErrorLimitExceed    ImageCreateResultStatusEnum = "ErrorLimitExceed"
	ImageCreateResultStatusEnumErrorTagLimitExceed ImageCreateResultStatusEnum = "ErrorTagLimitExceed"
	ImageCreateResultStatusEnumErrorUnknown        ImageCreateResultStatusEnum = "ErrorUnknown"
)

type ImageCreateResult struct {
	Image     *Image                       `json:"Image,omitempty"`
	SourceURL *string                      `json:"SourceUrl,omitempty"`
	Status    *ImageCreateResultStatusEnum `json:"Status,omitempty"`
}
