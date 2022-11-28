package shared

type GoogleCloudChannelV1MediaTypeEnum string

const (
	GoogleCloudChannelV1MediaTypeEnumMediaTypeUnspecified GoogleCloudChannelV1MediaTypeEnum = "MEDIA_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1MediaTypeEnumMediaTypeImage       GoogleCloudChannelV1MediaTypeEnum = "MEDIA_TYPE_IMAGE"
)

// GoogleCloudChannelV1Media
// Represents media information.
type GoogleCloudChannelV1Media struct {
	Content *string                            `json:"content,omitempty"`
	Title   *string                            `json:"title,omitempty"`
	Type    *GoogleCloudChannelV1MediaTypeEnum `json:"type,omitempty"`
}
