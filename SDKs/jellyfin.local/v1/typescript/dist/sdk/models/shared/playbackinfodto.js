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
import { DeviceProfile } from "./deviceprofile";
// PlaybackInfoDto
/**
 * Plabyback info dto.
**/
var PlaybackInfoDto = /** @class */ (function (_super) {
    __extends(PlaybackInfoDto, _super);
    function PlaybackInfoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowAudioStreamCopy" }),
        __metadata("design:type", Boolean)
    ], PlaybackInfoDto.prototype, "allowAudioStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowVideoStreamCopy" }),
        __metadata("design:type", Boolean)
    ], PlaybackInfoDto.prototype, "allowVideoStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" }),
        __metadata("design:type", Number)
    ], PlaybackInfoDto.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoOpenLiveStream" }),
        __metadata("design:type", Boolean)
    ], PlaybackInfoDto.prototype, "autoOpenLiveStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceProfile" }),
        __metadata("design:type", DeviceProfile)
    ], PlaybackInfoDto.prototype, "deviceProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDirectPlay" }),
        __metadata("design:type", Boolean)
    ], PlaybackInfoDto.prototype, "enableDirectPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDirectStream" }),
        __metadata("design:type", Boolean)
    ], PlaybackInfoDto.prototype, "enableDirectStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableTranscoding" }),
        __metadata("design:type", Boolean)
    ], PlaybackInfoDto.prototype, "enableTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LiveStreamId" }),
        __metadata("design:type", String)
    ], PlaybackInfoDto.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAudioChannels" }),
        __metadata("design:type", Number)
    ], PlaybackInfoDto.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], PlaybackInfoDto.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSourceId" }),
        __metadata("design:type", String)
    ], PlaybackInfoDto.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTimeTicks" }),
        __metadata("design:type", Number)
    ], PlaybackInfoDto.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], PlaybackInfoDto.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], PlaybackInfoDto.prototype, "userId", void 0);
    return PlaybackInfoDto;
}(SpeakeasyBase));
export { PlaybackInfoDto };
