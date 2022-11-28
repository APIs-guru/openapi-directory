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
export var VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
(function (VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum) {
    VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum["VideoPlayerSizeUnspecified"] = "VIDEO_PLAYER_SIZE_UNSPECIFIED";
    VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum["VideoPlayerSizeSmall"] = "VIDEO_PLAYER_SIZE_SMALL";
    VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum["VideoPlayerSizeLarge"] = "VIDEO_PLAYER_SIZE_LARGE";
    VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum["VideoPlayerSizeHd"] = "VIDEO_PLAYER_SIZE_HD";
    VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum["VideoPlayerSizeUnknown"] = "VIDEO_PLAYER_SIZE_UNKNOWN";
})(VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum || (VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum = {}));
// VideoPlayerSizeAssignedTargetingOptionDetails
/**
 * Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.
**/
var VideoPlayerSizeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(VideoPlayerSizeAssignedTargetingOptionDetails, _super);
    function VideoPlayerSizeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], VideoPlayerSizeAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPlayerSize" }),
        __metadata("design:type", String)
    ], VideoPlayerSizeAssignedTargetingOptionDetails.prototype, "videoPlayerSize", void 0);
    return VideoPlayerSizeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { VideoPlayerSizeAssignedTargetingOptionDetails };
