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
export var LiveStreamConfigurationIssueSeverityEnum;
(function (LiveStreamConfigurationIssueSeverityEnum) {
    LiveStreamConfigurationIssueSeverityEnum["Info"] = "info";
    LiveStreamConfigurationIssueSeverityEnum["Warning"] = "warning";
    LiveStreamConfigurationIssueSeverityEnum["Error"] = "error";
})(LiveStreamConfigurationIssueSeverityEnum || (LiveStreamConfigurationIssueSeverityEnum = {}));
export var LiveStreamConfigurationIssueTypeEnum;
(function (LiveStreamConfigurationIssueTypeEnum) {
    LiveStreamConfigurationIssueTypeEnum["GopSizeOver"] = "gopSizeOver";
    LiveStreamConfigurationIssueTypeEnum["GopSizeLong"] = "gopSizeLong";
    LiveStreamConfigurationIssueTypeEnum["GopSizeShort"] = "gopSizeShort";
    LiveStreamConfigurationIssueTypeEnum["OpenGop"] = "openGop";
    LiveStreamConfigurationIssueTypeEnum["BadContainer"] = "badContainer";
    LiveStreamConfigurationIssueTypeEnum["AudioBitrateHigh"] = "audioBitrateHigh";
    LiveStreamConfigurationIssueTypeEnum["AudioBitrateLow"] = "audioBitrateLow";
    LiveStreamConfigurationIssueTypeEnum["AudioSampleRate"] = "audioSampleRate";
    LiveStreamConfigurationIssueTypeEnum["BitrateHigh"] = "bitrateHigh";
    LiveStreamConfigurationIssueTypeEnum["BitrateLow"] = "bitrateLow";
    LiveStreamConfigurationIssueTypeEnum["AudioCodec"] = "audioCodec";
    LiveStreamConfigurationIssueTypeEnum["VideoCodec"] = "videoCodec";
    LiveStreamConfigurationIssueTypeEnum["NoAudioStream"] = "noAudioStream";
    LiveStreamConfigurationIssueTypeEnum["NoVideoStream"] = "noVideoStream";
    LiveStreamConfigurationIssueTypeEnum["MultipleVideoStreams"] = "multipleVideoStreams";
    LiveStreamConfigurationIssueTypeEnum["MultipleAudioStreams"] = "multipleAudioStreams";
    LiveStreamConfigurationIssueTypeEnum["AudioTooManyChannels"] = "audioTooManyChannels";
    LiveStreamConfigurationIssueTypeEnum["InterlacedVideo"] = "interlacedVideo";
    LiveStreamConfigurationIssueTypeEnum["FrameRateHigh"] = "frameRateHigh";
    LiveStreamConfigurationIssueTypeEnum["ResolutionMismatch"] = "resolutionMismatch";
    LiveStreamConfigurationIssueTypeEnum["VideoCodecMismatch"] = "videoCodecMismatch";
    LiveStreamConfigurationIssueTypeEnum["VideoInterlaceMismatch"] = "videoInterlaceMismatch";
    LiveStreamConfigurationIssueTypeEnum["VideoProfileMismatch"] = "videoProfileMismatch";
    LiveStreamConfigurationIssueTypeEnum["VideoBitrateMismatch"] = "videoBitrateMismatch";
    LiveStreamConfigurationIssueTypeEnum["FramerateMismatch"] = "framerateMismatch";
    LiveStreamConfigurationIssueTypeEnum["GopMismatch"] = "gopMismatch";
    LiveStreamConfigurationIssueTypeEnum["AudioSampleRateMismatch"] = "audioSampleRateMismatch";
    LiveStreamConfigurationIssueTypeEnum["AudioStereoMismatch"] = "audioStereoMismatch";
    LiveStreamConfigurationIssueTypeEnum["AudioCodecMismatch"] = "audioCodecMismatch";
    LiveStreamConfigurationIssueTypeEnum["AudioBitrateMismatch"] = "audioBitrateMismatch";
    LiveStreamConfigurationIssueTypeEnum["VideoResolutionSuboptimal"] = "videoResolutionSuboptimal";
    LiveStreamConfigurationIssueTypeEnum["VideoResolutionUnsupported"] = "videoResolutionUnsupported";
    LiveStreamConfigurationIssueTypeEnum["VideoIngestionStarved"] = "videoIngestionStarved";
    LiveStreamConfigurationIssueTypeEnum["VideoIngestionFasterThanRealtime"] = "videoIngestionFasterThanRealtime";
})(LiveStreamConfigurationIssueTypeEnum || (LiveStreamConfigurationIssueTypeEnum = {}));
var LiveStreamConfigurationIssue = /** @class */ (function (_super) {
    __extends(LiveStreamConfigurationIssue, _super);
    function LiveStreamConfigurationIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LiveStreamConfigurationIssue.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], LiveStreamConfigurationIssue.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], LiveStreamConfigurationIssue.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LiveStreamConfigurationIssue.prototype, "type", void 0);
    return LiveStreamConfigurationIssue;
}(SpeakeasyBase));
export { LiveStreamConfigurationIssue };
