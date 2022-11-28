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
import { EncodingContextEnum } from "./encodingcontextenum";
import { TranscodeSeekInfoEnum } from "./transcodeseekinfoenum";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";
var TranscodingProfile = /** @class */ (function (_super) {
    __extends(TranscodingProfile, _super);
    function TranscodingProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AudioCodec" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "audioCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BreakOnNonKeyFrames" }),
        __metadata("design:type", Boolean)
    ], TranscodingProfile.prototype, "breakOnNonKeyFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Context" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyTimestamps" }),
        __metadata("design:type", Boolean)
    ], TranscodingProfile.prototype, "copyTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMpegtsM2TsMode" }),
        __metadata("design:type", Boolean)
    ], TranscodingProfile.prototype, "enableMpegtsM2TsMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSubtitlesInManifest" }),
        __metadata("design:type", Boolean)
    ], TranscodingProfile.prototype, "enableSubtitlesInManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimateContentLength" }),
        __metadata("design:type", Boolean)
    ], TranscodingProfile.prototype, "estimateContentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAudioChannels" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinSegments" }),
        __metadata("design:type", Number)
    ], TranscodingProfile.prototype, "minSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocol" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentLength" }),
        __metadata("design:type", Number)
    ], TranscodingProfile.prototype, "segmentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodeSeekInfo" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "transcodeSeekInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VideoCodec" }),
        __metadata("design:type", String)
    ], TranscodingProfile.prototype, "videoCodec", void 0);
    return TranscodingProfile;
}(SpeakeasyBase));
export { TranscodingProfile };
