package shared




type MediaFileMimeTypeEnum string

const (
    MediaFileMimeTypeEnumVideoMimeTypeUnspecified MediaFileMimeTypeEnum = "VIDEO_MIME_TYPE_UNSPECIFIED"
MediaFileMimeTypeEnumMimeVideoXflv MediaFileMimeTypeEnum = "MIME_VIDEO_XFLV"
MediaFileMimeTypeEnumMimeVideoWebm MediaFileMimeTypeEnum = "MIME_VIDEO_WEBM"
MediaFileMimeTypeEnumMimeVideoMp4 MediaFileMimeTypeEnum = "MIME_VIDEO_MP4"
MediaFileMimeTypeEnumMimeVideoOgg MediaFileMimeTypeEnum = "MIME_VIDEO_OGG"
MediaFileMimeTypeEnumMimeVideoYtHosted MediaFileMimeTypeEnum = "MIME_VIDEO_YT_HOSTED"
MediaFileMimeTypeEnumMimeVideoXMsWmv MediaFileMimeTypeEnum = "MIME_VIDEO_X_MS_WMV"
MediaFileMimeTypeEnumMimeVideo3Gpp MediaFileMimeTypeEnum = "MIME_VIDEO_3GPP"
MediaFileMimeTypeEnumMimeVideoMov MediaFileMimeTypeEnum = "MIME_VIDEO_MOV"
MediaFileMimeTypeEnumMimeApplicationSwf MediaFileMimeTypeEnum = "MIME_APPLICATION_SWF"
MediaFileMimeTypeEnumMimeApplicationSurvey MediaFileMimeTypeEnum = "MIME_APPLICATION_SURVEY"
MediaFileMimeTypeEnumMimeApplicationJavascript MediaFileMimeTypeEnum = "MIME_APPLICATION_JAVASCRIPT"
MediaFileMimeTypeEnumMimeApplicationSilverlight MediaFileMimeTypeEnum = "MIME_APPLICATION_SILVERLIGHT"
MediaFileMimeTypeEnumMimeApplicationMpegurl MediaFileMimeTypeEnum = "MIME_APPLICATION_MPEGURL"
MediaFileMimeTypeEnumMimeApplicationMpegdash MediaFileMimeTypeEnum = "MIME_APPLICATION_MPEGDASH"
MediaFileMimeTypeEnumMimeAudioMp4A MediaFileMimeTypeEnum = "MIME_AUDIO_MP4A"
MediaFileMimeTypeEnumMimeAudioMp3 MediaFileMimeTypeEnum = "MIME_AUDIO_MP3"
MediaFileMimeTypeEnumMimeAudioOgg MediaFileMimeTypeEnum = "MIME_AUDIO_OGG"
)


type MediaFile struct {
    Bitrate *string `json:"bitrate,omitempty"`
    MimeType *MediaFileMimeTypeEnum `json:"mimeType,omitempty"`
    
}

