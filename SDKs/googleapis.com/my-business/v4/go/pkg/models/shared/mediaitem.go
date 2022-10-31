package shared




type MediaItemMediaFormatEnum string

const (
    MediaItemMediaFormatEnumMediaFormatUnspecified MediaItemMediaFormatEnum = "MEDIA_FORMAT_UNSPECIFIED"
MediaItemMediaFormatEnumPhoto MediaItemMediaFormatEnum = "PHOTO"
MediaItemMediaFormatEnumVideo MediaItemMediaFormatEnum = "VIDEO"
)


type MediaItem struct {
    Attribution *Attribution `json:"attribution,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DataRef *MediaItemDataRef `json:"dataRef,omitempty"`
    Description *string `json:"description,omitempty"`
    Dimensions *Dimensions `json:"dimensions,omitempty"`
    GoogleURL *string `json:"googleUrl,omitempty"`
    Insights *MediaInsights `json:"insights,omitempty"`
    LocationAssociation *LocationAssociation `json:"locationAssociation,omitempty"`
    MediaFormat *MediaItemMediaFormatEnum `json:"mediaFormat,omitempty"`
    Name *string `json:"name,omitempty"`
    SourceURL *string `json:"sourceUrl,omitempty"`
    ThumbnailURL *string `json:"thumbnailUrl,omitempty"`
    
}

