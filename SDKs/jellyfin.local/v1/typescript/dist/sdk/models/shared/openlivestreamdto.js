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
// OpenLiveStreamDto
/**
 * Open live stream dto.
**/
var OpenLiveStreamDto = /** @class */ (function (_super) {
    __extends(OpenLiveStreamDto, _super);
    function OpenLiveStreamDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamDto.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceProfile" }),
        __metadata("design:type", DeviceProfile)
    ], OpenLiveStreamDto.prototype, "deviceProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectPlayProtocols" }),
        __metadata("design:type", Array)
    ], OpenLiveStreamDto.prototype, "directPlayProtocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDirectPlay" }),
        __metadata("design:type", Boolean)
    ], OpenLiveStreamDto.prototype, "enableDirectPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDirectStream" }),
        __metadata("design:type", Boolean)
    ], OpenLiveStreamDto.prototype, "enableDirectStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemId" }),
        __metadata("design:type", String)
    ], OpenLiveStreamDto.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAudioChannels" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamDto.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamDto.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenToken" }),
        __metadata("design:type", String)
    ], OpenLiveStreamDto.prototype, "openToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaySessionId" }),
        __metadata("design:type", String)
    ], OpenLiveStreamDto.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTimeTicks" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamDto.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamDto.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], OpenLiveStreamDto.prototype, "userId", void 0);
    return OpenLiveStreamDto;
}(SpeakeasyBase));
export { OpenLiveStreamDto };
