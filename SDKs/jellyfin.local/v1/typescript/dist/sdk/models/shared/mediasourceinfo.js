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
import { MediaProtocolEnum } from "./mediaprotocolenum";
import { IsoTypeEnum } from "./isotypeenum";
import { MediaAttachment } from "./mediaattachment";
import { MediaStream } from "./mediastream";
import { TransportStreamTimestampEnum } from "./transportstreamtimestampenum";
import { MediaSourceTypeEnum } from "./mediasourcetypeenum";
import { Video3DFormatEnum } from "./video3dformatenum";
import { VideoTypeEnum } from "./videotypeenum";
import { MediaStreamInput } from "./mediastream";
var MediaSourceInfo = /** @class */ (function (_super) {
    __extends(MediaSourceInfo, _super);
    function MediaSourceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalyzeDurationMs" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "analyzeDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bitrate" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "bitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferMs" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "bufferMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAudioStreamIndex" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "defaultAudioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "defaultSubtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ETag" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "eTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncoderPath" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "encoderPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncoderProtocol" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "encoderProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Formats" }),
        __metadata("design:type", Array)
    ], MediaSourceInfo.prototype, "formats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenPtsInput" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "genPtsInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreDts" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "ignoreDts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreIndex" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "ignoreIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsInfiniteStream" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "isInfiniteStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRemote" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "isRemote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoType" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "isoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LiveStreamId" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaAttachments", elemType: MediaAttachment }),
        __metadata("design:type", Array)
    ], MediaSourceInfo.prototype, "mediaAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStream }),
        __metadata("design:type", Array)
    ], MediaSourceInfo.prototype, "mediaStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenToken" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "openToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocol" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadAtNativeFramerate" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "readAtNativeFramerate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiredHttpHeaders" }),
        __metadata("design:type", Map)
    ], MediaSourceInfo.prototype, "requiredHttpHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresClosing" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "requiresClosing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresLooping" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "requiresLooping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresOpening" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "requiresOpening", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], MediaSourceInfo.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsDirectPlay" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "supportsDirectPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsDirectStream" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "supportsDirectStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsProbing" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "supportsProbing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsTranscoding" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfo.prototype, "supportsTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingContainer" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "transcodingContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingSubProtocol" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "transcodingSubProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingUrl" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "transcodingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Video3DFormat" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "video3DFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VideoType" }),
        __metadata("design:type", String)
    ], MediaSourceInfo.prototype, "videoType", void 0);
    return MediaSourceInfo;
}(SpeakeasyBase));
export { MediaSourceInfo };
var MediaSourceInfoInput = /** @class */ (function (_super) {
    __extends(MediaSourceInfoInput, _super);
    function MediaSourceInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnalyzeDurationMs" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "analyzeDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bitrate" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "bitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferMs" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "bufferMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAudioStreamIndex" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "defaultAudioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "defaultSubtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ETag" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "eTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncoderPath" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "encoderPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncoderProtocol" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "encoderProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Formats" }),
        __metadata("design:type", Array)
    ], MediaSourceInfoInput.prototype, "formats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenPtsInput" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "genPtsInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreDts" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "ignoreDts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreIndex" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "ignoreIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsInfiniteStream" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "isInfiniteStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRemote" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "isRemote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoType" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "isoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LiveStreamId" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaAttachments", elemType: MediaAttachment }),
        __metadata("design:type", Array)
    ], MediaSourceInfoInput.prototype, "mediaAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStreamInput }),
        __metadata("design:type", Array)
    ], MediaSourceInfoInput.prototype, "mediaStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenToken" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "openToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocol" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadAtNativeFramerate" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "readAtNativeFramerate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiredHttpHeaders" }),
        __metadata("design:type", Map)
    ], MediaSourceInfoInput.prototype, "requiredHttpHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresClosing" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "requiresClosing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresLooping" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "requiresLooping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresOpening" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "requiresOpening", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], MediaSourceInfoInput.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsDirectPlay" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "supportsDirectPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsDirectStream" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "supportsDirectStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsProbing" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "supportsProbing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsTranscoding" }),
        __metadata("design:type", Boolean)
    ], MediaSourceInfoInput.prototype, "supportsTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingContainer" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "transcodingContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingSubProtocol" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "transcodingSubProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingUrl" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "transcodingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Video3DFormat" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "video3DFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VideoType" }),
        __metadata("design:type", String)
    ], MediaSourceInfoInput.prototype, "videoType", void 0);
    return MediaSourceInfoInput;
}(SpeakeasyBase));
export { MediaSourceInfoInput };
