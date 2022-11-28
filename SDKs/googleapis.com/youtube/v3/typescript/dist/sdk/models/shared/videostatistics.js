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
// VideoStatistics
/**
 * Statistics about the video, such as the number of times the video was viewed or liked.
**/
var VideoStatistics = /** @class */ (function (_super) {
    __extends(VideoStatistics, _super);
    function VideoStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentCount" }),
        __metadata("design:type", String)
    ], VideoStatistics.prototype, "commentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dislikeCount" }),
        __metadata("design:type", String)
    ], VideoStatistics.prototype, "dislikeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favoriteCount" }),
        __metadata("design:type", String)
    ], VideoStatistics.prototype, "favoriteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likeCount" }),
        __metadata("design:type", String)
    ], VideoStatistics.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewCount" }),
        __metadata("design:type", String)
    ], VideoStatistics.prototype, "viewCount", void 0);
    return VideoStatistics;
}(SpeakeasyBase));
export { VideoStatistics };
