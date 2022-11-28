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
import { ThumbnailDetails } from "./thumbnaildetails";
// LiveBroadcastSnippet
/**
 * Basic broadcast information.
**/
var LiveBroadcastSnippet = /** @class */ (function (_super) {
    __extends(LiveBroadcastSnippet, _super);
    function LiveBroadcastSnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actualEndTime" }),
        __metadata("design:type", Date)
    ], LiveBroadcastSnippet.prototype, "actualEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actualStartTime" }),
        __metadata("design:type", Date)
    ], LiveBroadcastSnippet.prototype, "actualStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], LiveBroadcastSnippet.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LiveBroadcastSnippet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefaultBroadcast" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastSnippet.prototype, "isDefaultBroadcast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveChatId" }),
        __metadata("design:type", String)
    ], LiveBroadcastSnippet.prototype, "liveChatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", Date)
    ], LiveBroadcastSnippet.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledEndTime" }),
        __metadata("design:type", Date)
    ], LiveBroadcastSnippet.prototype, "scheduledEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledStartTime" }),
        __metadata("design:type", Date)
    ], LiveBroadcastSnippet.prototype, "scheduledStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnails" }),
        __metadata("design:type", ThumbnailDetails)
    ], LiveBroadcastSnippet.prototype, "thumbnails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LiveBroadcastSnippet.prototype, "title", void 0);
    return LiveBroadcastSnippet;
}(SpeakeasyBase));
export { LiveBroadcastSnippet };
