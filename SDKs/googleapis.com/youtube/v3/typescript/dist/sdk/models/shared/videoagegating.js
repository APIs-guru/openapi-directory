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
export var VideoAgeGatingVideoGameRatingEnum;
(function (VideoAgeGatingVideoGameRatingEnum) {
    VideoAgeGatingVideoGameRatingEnum["Anyone"] = "anyone";
    VideoAgeGatingVideoGameRatingEnum["M15Plus"] = "m15Plus";
    VideoAgeGatingVideoGameRatingEnum["M16Plus"] = "m16Plus";
    VideoAgeGatingVideoGameRatingEnum["M17Plus"] = "m17Plus";
})(VideoAgeGatingVideoGameRatingEnum || (VideoAgeGatingVideoGameRatingEnum = {}));
var VideoAgeGating = /** @class */ (function (_super) {
    __extends(VideoAgeGating, _super);
    function VideoAgeGating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alcoholContent" }),
        __metadata("design:type", Boolean)
    ], VideoAgeGating.prototype, "alcoholContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restricted" }),
        __metadata("design:type", Boolean)
    ], VideoAgeGating.prototype, "restricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoGameRating" }),
        __metadata("design:type", String)
    ], VideoAgeGating.prototype, "videoGameRating", void 0);
    return VideoAgeGating;
}(SpeakeasyBase));
export { VideoAgeGating };
