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
import { BaseItemDtoInput } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";
// PlaybackStartInfoInput
/**
 * Class PlaybackStartInfo.
**/
var PlaybackStartInfoInput = /** @class */ (function (_super) {
    __extends(PlaybackStartInfoInput, _super);
    function PlaybackStartInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" }),
        __metadata("design:type", Number)
    ], PlaybackStartInfoInput.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brightness" }),
        __metadata("design:type", Number)
    ], PlaybackStartInfoInput.prototype, "brightness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanSeek" }),
        __metadata("design:type", Boolean)
    ], PlaybackStartInfoInput.prototype, "canSeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsMuted" }),
        __metadata("design:type", Boolean)
    ], PlaybackStartInfoInput.prototype, "isMuted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPaused" }),
        __metadata("design:type", Boolean)
    ], PlaybackStartInfoInput.prototype, "isPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Item" }),
        __metadata("design:type", BaseItemDtoInput)
    ], PlaybackStartInfoInput.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemId" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LiveStreamId" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSourceId" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NowPlayingQueue", elemType: QueueItem }),
        __metadata("design:type", Array)
    ], PlaybackStartInfoInput.prototype, "nowPlayingQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayMethod" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "playMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaySessionId" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaybackStartTimeTicks" }),
        __metadata("design:type", Number)
    ], PlaybackStartInfoInput.prototype, "playbackStartTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaylistItemId" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "playlistItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PositionTicks" }),
        __metadata("design:type", Number)
    ], PlaybackStartInfoInput.prototype, "positionTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepeatMode" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "repeatMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SessionId" }),
        __metadata("design:type", String)
    ], PlaybackStartInfoInput.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], PlaybackStartInfoInput.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeLevel" }),
        __metadata("design:type", Number)
    ], PlaybackStartInfoInput.prototype, "volumeLevel", void 0);
    return PlaybackStartInfoInput;
}(SpeakeasyBase));
export { PlaybackStartInfoInput };
