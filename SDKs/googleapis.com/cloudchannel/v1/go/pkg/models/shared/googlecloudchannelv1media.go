package shared

type GoogleCloudChannelV1MediaTypeEnum string

const (
	GoogleCloudChannelV1MediaTypeEnumMediaTypeUnspecified GoogleCloudChannelV1MediaTypeEnum = "MEDIA_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1MediaTypeEnumMediaTypeImage       GoogleCloudChannelV1MediaTypeEnum = "MEDIA_TYPE_IMAGE"
)

type GoogleCloudChannelV1Media struct {
	Content *string                            `json:"content"`
	Title   *string                            `json:"title"`
	Type    *GoogleCloudChannelV1MediaTypeEnum `json:"type"`
}
