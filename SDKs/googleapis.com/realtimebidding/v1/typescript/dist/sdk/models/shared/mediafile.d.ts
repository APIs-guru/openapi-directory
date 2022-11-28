import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MediaFileMimeTypeEnum {
    VideoMimeTypeUnspecified = "VIDEO_MIME_TYPE_UNSPECIFIED",
    MimeVideoXflv = "MIME_VIDEO_XFLV",
    MimeVideoWebm = "MIME_VIDEO_WEBM",
    MimeVideoMp4 = "MIME_VIDEO_MP4",
    MimeVideoOgg = "MIME_VIDEO_OGG",
    MimeVideoYtHosted = "MIME_VIDEO_YT_HOSTED",
    MimeVideoXMsWmv = "MIME_VIDEO_X_MS_WMV",
    MimeVideo3Gpp = "MIME_VIDEO_3GPP",
    MimeVideoMov = "MIME_VIDEO_MOV",
    MimeApplicationSwf = "MIME_APPLICATION_SWF",
    MimeApplicationSurvey = "MIME_APPLICATION_SURVEY",
    MimeApplicationJavascript = "MIME_APPLICATION_JAVASCRIPT",
    MimeApplicationSilverlight = "MIME_APPLICATION_SILVERLIGHT",
    MimeApplicationMpegurl = "MIME_APPLICATION_MPEGURL",
    MimeApplicationMpegdash = "MIME_APPLICATION_MPEGDASH",
    MimeAudioMp4A = "MIME_AUDIO_MP4A",
    MimeAudioMp3 = "MIME_AUDIO_MP3",
    MimeAudioOgg = "MIME_AUDIO_OGG"
}
/**
 * Information about each media file in the VAST.
**/
export declare class MediaFile extends SpeakeasyBase {
    bitrate?: string;
    mimeType?: MediaFileMimeTypeEnum;
}
