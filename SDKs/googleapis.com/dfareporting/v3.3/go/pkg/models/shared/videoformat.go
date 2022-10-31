package shared




type VideoFormatFileTypeEnum string

const (
    VideoFormatFileTypeEnumFlv VideoFormatFileTypeEnum = "FLV"
VideoFormatFileTypeEnumThreegpp VideoFormatFileTypeEnum = "THREEGPP"
VideoFormatFileTypeEnumMp4 VideoFormatFileTypeEnum = "MP4"
VideoFormatFileTypeEnumWebm VideoFormatFileTypeEnum = "WEBM"
VideoFormatFileTypeEnumM3U8 VideoFormatFileTypeEnum = "M3U8"
)


type VideoFormat struct {
    FileType *VideoFormatFileTypeEnum `json:"fileType,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Resolution *Size `json:"resolution,omitempty"`
    TargetBitRate *int32 `json:"targetBitRate,omitempty"`
    
}

