var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var MediaFileMimeTypeEnum;
(function (MediaFileMimeTypeEnum) {
    MediaFileMimeTypeEnum["VideoMimeTypeUnspecified"] = "VIDEO_MIME_TYPE_UNSPECIFIED";
    MediaFileMimeTypeEnum["MimeVideoXflv"] = "MIME_VIDEO_XFLV";
    MediaFileMimeTypeEnum["MimeVideoWebm"] = "MIME_VIDEO_WEBM";
    MediaFileMimeTypeEnum["MimeVideoMp4"] = "MIME_VIDEO_MP4";
    MediaFileMimeTypeEnum["MimeVideoOgg"] = "MIME_VIDEO_OGG";
    MediaFileMimeTypeEnum["MimeVideoYtHosted"] = "MIME_VIDEO_YT_HOSTED";
    MediaFileMimeTypeEnum["MimeVideoXMsWmv"] = "MIME_VIDEO_X_MS_WMV";
    MediaFileMimeTypeEnum["MimeVideo3Gpp"] = "MIME_VIDEO_3GPP";
    MediaFileMimeTypeEnum["MimeVideoMov"] = "MIME_VIDEO_MOV";
    MediaFileMimeTypeEnum["MimeApplicationSwf"] = "MIME_APPLICATION_SWF";
    MediaFileMimeTypeEnum["MimeApplicationSurvey"] = "MIME_APPLICATION_SURVEY";
    MediaFileMimeTypeEnum["MimeApplicationJavascript"] = "MIME_APPLICATION_JAVASCRIPT";
    MediaFileMimeTypeEnum["MimeApplicationSilverlight"] = "MIME_APPLICATION_SILVERLIGHT";
    MediaFileMimeTypeEnum["MimeApplicationMpegurl"] = "MIME_APPLICATION_MPEGURL";
    MediaFileMimeTypeEnum["MimeApplicationMpegdash"] = "MIME_APPLICATION_MPEGDASH";
    MediaFileMimeTypeEnum["MimeAudioMp4A"] = "MIME_AUDIO_MP4A";
    MediaFileMimeTypeEnum["MimeAudioMp3"] = "MIME_AUDIO_MP3";
    MediaFileMimeTypeEnum["MimeAudioOgg"] = "MIME_AUDIO_OGG";
})(MediaFileMimeTypeEnum || (MediaFileMimeTypeEnum = {}));
// MediaFile
/**
 * Information about each media file in the VAST.
**/
var MediaFile = /** @class */ (function (_super) {
    __extends(MediaFile, _super);
    function MediaFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "bitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], MediaFile.prototype, "mimeType", void 0);
    return MediaFile;
}(SpeakeasyBase));
export { MediaFile };
