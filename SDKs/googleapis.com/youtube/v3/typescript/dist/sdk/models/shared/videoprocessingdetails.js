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
import { VideoProcessingDetailsProcessingProgress } from "./videoprocessingdetailsprocessingprogress";
export var VideoProcessingDetailsProcessingFailureReasonEnum;
(function (VideoProcessingDetailsProcessingFailureReasonEnum) {
    VideoProcessingDetailsProcessingFailureReasonEnum["UploadFailed"] = "uploadFailed";
    VideoProcessingDetailsProcessingFailureReasonEnum["TranscodeFailed"] = "transcodeFailed";
    VideoProcessingDetailsProcessingFailureReasonEnum["StreamingFailed"] = "streamingFailed";
    VideoProcessingDetailsProcessingFailureReasonEnum["Other"] = "other";
})(VideoProcessingDetailsProcessingFailureReasonEnum || (VideoProcessingDetailsProcessingFailureReasonEnum = {}));
export var VideoProcessingDetailsProcessingStatusEnum;
(function (VideoProcessingDetailsProcessingStatusEnum) {
    VideoProcessingDetailsProcessingStatusEnum["Processing"] = "processing";
    VideoProcessingDetailsProcessingStatusEnum["Succeeded"] = "succeeded";
    VideoProcessingDetailsProcessingStatusEnum["Failed"] = "failed";
    VideoProcessingDetailsProcessingStatusEnum["Terminated"] = "terminated";
})(VideoProcessingDetailsProcessingStatusEnum || (VideoProcessingDetailsProcessingStatusEnum = {}));
// VideoProcessingDetails
/**
 * Describes processing status and progress and availability of some other Video resource parts.
**/
var VideoProcessingDetails = /** @class */ (function (_super) {
    __extends(VideoProcessingDetails, _super);
    function VideoProcessingDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorSuggestionsAvailability" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "editorSuggestionsAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileDetailsAvailability" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "fileDetailsAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingFailureReason" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "processingFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingIssuesAvailability" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "processingIssuesAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingProgress" }),
        __metadata("design:type", VideoProcessingDetailsProcessingProgress)
    ], VideoProcessingDetails.prototype, "processingProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingStatus" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "processingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagSuggestionsAvailability" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "tagSuggestionsAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailsAvailability" }),
        __metadata("design:type", String)
    ], VideoProcessingDetails.prototype, "thumbnailsAvailability", void 0);
    return VideoProcessingDetails;
}(SpeakeasyBase));
export { VideoProcessingDetails };
