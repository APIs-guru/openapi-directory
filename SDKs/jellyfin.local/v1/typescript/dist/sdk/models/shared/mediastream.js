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
import { SubtitleDeliveryMethodEnum } from "./subtitledeliverymethodenum";
import { MediaStreamTypeEnum } from "./mediastreamtypeenum";
// MediaStream
/**
 * Class MediaStream.
**/
var MediaStream = /** @class */ (function (_super) {
    __extends(MediaStream, _super);
    function MediaStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AverageFrameRate" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "averageFrameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitDepth" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "bitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitRate" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "bitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelLayout" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "channelLayout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Channels" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Codec" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecTag" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "codecTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecTimeBase" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "codecTimeBase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorPrimaries" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "colorPrimaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorRange" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "colorRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorSpace" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "colorSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorTransfer" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "colorTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryMethod" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "deliveryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryUrl" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "deliveryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayTitle" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "displayTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Index" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAVC" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isAvc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAnamorphic" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isAnamorphic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDefault" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExternal" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isExternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExternalUrl" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isExternalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsForced" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isForced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsInterlaced" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isInterlaced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsTextSubtitleStream" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "isTextSubtitleStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Language" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Level" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NalLengthSize" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "nalLengthSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PacketLength" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "packetLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PixelFormat" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "pixelFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Profile" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RealFrameRate" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "realFrameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefFrames" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "refFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "sampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsExternalStream" }),
        __metadata("design:type", Boolean)
    ], MediaStream.prototype, "supportsExternalStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeBase" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "timeBase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VideoRange" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "videoRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], MediaStream.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedDefault" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "localizedDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedForced" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "localizedForced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedUndefined" }),
        __metadata("design:type", String)
    ], MediaStream.prototype, "localizedUndefined", void 0);
    return MediaStream;
}(SpeakeasyBase));
export { MediaStream };
// MediaStreamInput
/**
 * Class MediaStream.
**/
var MediaStreamInput = /** @class */ (function (_super) {
    __extends(MediaStreamInput, _super);
    function MediaStreamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AverageFrameRate" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "averageFrameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitDepth" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "bitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitRate" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "bitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelLayout" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "channelLayout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Channels" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Codec" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecTag" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "codecTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecTimeBase" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "codecTimeBase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorPrimaries" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "colorPrimaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorRange" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "colorRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorSpace" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "colorSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColorTransfer" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "colorTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryMethod" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "deliveryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryUrl" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "deliveryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Index" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAVC" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isAvc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAnamorphic" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isAnamorphic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDefault" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExternal" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isExternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExternalUrl" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isExternalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsForced" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isForced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsInterlaced" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "isInterlaced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Language" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Level" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NalLengthSize" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "nalLengthSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PacketLength" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "packetLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PixelFormat" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "pixelFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Profile" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RealFrameRate" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "realFrameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefFrames" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "refFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "sampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsExternalStream" }),
        __metadata("design:type", Boolean)
    ], MediaStreamInput.prototype, "supportsExternalStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeBase" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "timeBase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], MediaStreamInput.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedDefault" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "localizedDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedForced" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "localizedForced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedUndefined" }),
        __metadata("design:type", String)
    ], MediaStreamInput.prototype, "localizedUndefined", void 0);
    return MediaStreamInput;
}(SpeakeasyBase));
export { MediaStreamInput };
