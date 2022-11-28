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
// PlaybackStopInfoInput
/**
 * Class PlaybackStopInfo.
**/
var PlaybackStopInfoInput = /** @class */ (function (_super) {
    __extends(PlaybackStopInfoInput, _super);
    function PlaybackStopInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Failed" }),
        __metadata("design:type", Boolean)
    ], PlaybackStopInfoInput.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Item" }),
        __metadata("design:type", BaseItemDtoInput)
    ], PlaybackStopInfoInput.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemId" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LiveStreamId" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSourceId" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextMediaType" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "nextMediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NowPlayingQueue", elemType: QueueItem }),
        __metadata("design:type", Array)
    ], PlaybackStopInfoInput.prototype, "nowPlayingQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaySessionId" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaylistItemId" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "playlistItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PositionTicks" }),
        __metadata("design:type", Number)
    ], PlaybackStopInfoInput.prototype, "positionTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SessionId" }),
        __metadata("design:type", String)
    ], PlaybackStopInfoInput.prototype, "sessionId", void 0);
    return PlaybackStopInfoInput;
}(SpeakeasyBase));
export { PlaybackStopInfoInput };
