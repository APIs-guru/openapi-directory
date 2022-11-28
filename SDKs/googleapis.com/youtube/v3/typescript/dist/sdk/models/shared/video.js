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
import { VideoAgeGating } from "./videoagegating";
import { VideoContentDetails } from "./videocontentdetails";
import { VideoFileDetails } from "./videofiledetails";
import { VideoLiveStreamingDetails } from "./videolivestreamingdetails";
import { VideoLocalization } from "./videolocalization";
import { VideoMonetizationDetails } from "./videomonetizationdetails";
import { VideoPlayer } from "./videoplayer";
import { VideoProcessingDetails } from "./videoprocessingdetails";
import { VideoRecordingDetails } from "./videorecordingdetails";
import { VideoSnippet } from "./videosnippet";
import { VideoStatistics } from "./videostatistics";
import { VideoStatus } from "./videostatus";
import { VideoSuggestions } from "./videosuggestions";
import { VideoTopicDetails } from "./videotopicdetails";
// Video
/**
 * A *video* resource represents a YouTube video.
**/
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageGating" }),
        __metadata("design:type", VideoAgeGating)
    ], Video.prototype, "ageGating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDetails" }),
        __metadata("design:type", VideoContentDetails)
    ], Video.prototype, "contentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Video.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileDetails" }),
        __metadata("design:type", VideoFileDetails)
    ], Video.prototype, "fileDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Video.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Video.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveStreamingDetails" }),
        __metadata("design:type", VideoLiveStreamingDetails)
    ], Video.prototype, "liveStreamingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizations", elemType: VideoLocalization }),
        __metadata("design:type", Map)
    ], Video.prototype, "localizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monetizationDetails" }),
        __metadata("design:type", VideoMonetizationDetails)
    ], Video.prototype, "monetizationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=player" }),
        __metadata("design:type", VideoPlayer)
    ], Video.prototype, "player", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingDetails" }),
        __metadata("design:type", VideoProcessingDetails)
    ], Video.prototype, "processingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectDetails" }),
        __metadata("design:type", Map)
    ], Video.prototype, "projectDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordingDetails" }),
        __metadata("design:type", VideoRecordingDetails)
    ], Video.prototype, "recordingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", VideoSnippet)
    ], Video.prototype, "snippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistics" }),
        __metadata("design:type", VideoStatistics)
    ], Video.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", VideoStatus)
    ], Video.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestions" }),
        __metadata("design:type", VideoSuggestions)
    ], Video.prototype, "suggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicDetails" }),
        __metadata("design:type", VideoTopicDetails)
    ], Video.prototype, "topicDetails", void 0);
    return Video;
}(SpeakeasyBase));
export { Video };
