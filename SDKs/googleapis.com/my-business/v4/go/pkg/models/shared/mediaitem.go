package shared

type MediaItemMediaFormatEnum string

const (
	MediaItemMediaFormatEnumMediaFormatUnspecified MediaItemMediaFormatEnum = "MEDIA_FORMAT_UNSPECIFIED"
	MediaItemMediaFormatEnumPhoto                  MediaItemMediaFormatEnum = "PHOTO"
	MediaItemMediaFormatEnumVideo                  MediaItemMediaFormatEnum = "VIDEO"
)

type MediaItem struct {
	Attribution         *Attribution              `json:"attribution"`
	CreateTime          *string                   `json:"createTime"`
	DataRef             *MediaItemDataRef         `json:"dataRef"`
	Description         *string                   `json:"description"`
	Dimensions          *Dimensions               `json:"dimensions"`
	GoogleURL           *string                   `json:"googleUrl"`
	Insights            *MediaInsights            `json:"insights"`
	LocationAssociation *LocationAssociation      `json:"locationAssociation"`
	MediaFormat         *MediaItemMediaFormatEnum `json:"mediaFormat"`
	Name                *string                   `json:"name"`
	SourceURL           *string                   `json:"sourceUrl"`
	ThumbnailURL        *string                   `json:"thumbnailUrl"`
}
