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
export var IntegralAdScienceDisplayViewabilityEnum;
(function (IntegralAdScienceDisplayViewabilityEnum) {
    IntegralAdScienceDisplayViewabilityEnum["PerformanceViewabilityUnspecified"] = "PERFORMANCE_VIEWABILITY_UNSPECIFIED";
    IntegralAdScienceDisplayViewabilityEnum["PerformanceViewability40"] = "PERFORMANCE_VIEWABILITY_40";
    IntegralAdScienceDisplayViewabilityEnum["PerformanceViewability50"] = "PERFORMANCE_VIEWABILITY_50";
    IntegralAdScienceDisplayViewabilityEnum["PerformanceViewability60"] = "PERFORMANCE_VIEWABILITY_60";
    IntegralAdScienceDisplayViewabilityEnum["PerformanceViewability70"] = "PERFORMANCE_VIEWABILITY_70";
})(IntegralAdScienceDisplayViewabilityEnum || (IntegralAdScienceDisplayViewabilityEnum = {}));
export var IntegralAdScienceExcludedAdFraudRiskEnum;
(function (IntegralAdScienceExcludedAdFraudRiskEnum) {
    IntegralAdScienceExcludedAdFraudRiskEnum["SuspiciousActivityUnspecified"] = "SUSPICIOUS_ACTIVITY_UNSPECIFIED";
    IntegralAdScienceExcludedAdFraudRiskEnum["SuspiciousActivityHr"] = "SUSPICIOUS_ACTIVITY_HR";
    IntegralAdScienceExcludedAdFraudRiskEnum["SuspiciousActivityHmr"] = "SUSPICIOUS_ACTIVITY_HMR";
})(IntegralAdScienceExcludedAdFraudRiskEnum || (IntegralAdScienceExcludedAdFraudRiskEnum = {}));
export var IntegralAdScienceExcludedAdultRiskEnum;
(function (IntegralAdScienceExcludedAdultRiskEnum) {
    IntegralAdScienceExcludedAdultRiskEnum["AdultUnspecified"] = "ADULT_UNSPECIFIED";
    IntegralAdScienceExcludedAdultRiskEnum["AdultHr"] = "ADULT_HR";
    IntegralAdScienceExcludedAdultRiskEnum["AdultHmr"] = "ADULT_HMR";
})(IntegralAdScienceExcludedAdultRiskEnum || (IntegralAdScienceExcludedAdultRiskEnum = {}));
export var IntegralAdScienceExcludedAlcoholRiskEnum;
(function (IntegralAdScienceExcludedAlcoholRiskEnum) {
    IntegralAdScienceExcludedAlcoholRiskEnum["AlcoholUnspecified"] = "ALCOHOL_UNSPECIFIED";
    IntegralAdScienceExcludedAlcoholRiskEnum["AlcoholHr"] = "ALCOHOL_HR";
    IntegralAdScienceExcludedAlcoholRiskEnum["AlcoholHmr"] = "ALCOHOL_HMR";
})(IntegralAdScienceExcludedAlcoholRiskEnum || (IntegralAdScienceExcludedAlcoholRiskEnum = {}));
export var IntegralAdScienceExcludedDrugsRiskEnum;
(function (IntegralAdScienceExcludedDrugsRiskEnum) {
    IntegralAdScienceExcludedDrugsRiskEnum["DrugsUnspecified"] = "DRUGS_UNSPECIFIED";
    IntegralAdScienceExcludedDrugsRiskEnum["DrugsHr"] = "DRUGS_HR";
    IntegralAdScienceExcludedDrugsRiskEnum["DrugsHmr"] = "DRUGS_HMR";
})(IntegralAdScienceExcludedDrugsRiskEnum || (IntegralAdScienceExcludedDrugsRiskEnum = {}));
export var IntegralAdScienceExcludedGamblingRiskEnum;
(function (IntegralAdScienceExcludedGamblingRiskEnum) {
    IntegralAdScienceExcludedGamblingRiskEnum["GamblingUnspecified"] = "GAMBLING_UNSPECIFIED";
    IntegralAdScienceExcludedGamblingRiskEnum["GamblingHr"] = "GAMBLING_HR";
    IntegralAdScienceExcludedGamblingRiskEnum["GamblingHmr"] = "GAMBLING_HMR";
})(IntegralAdScienceExcludedGamblingRiskEnum || (IntegralAdScienceExcludedGamblingRiskEnum = {}));
export var IntegralAdScienceExcludedHateSpeechRiskEnum;
(function (IntegralAdScienceExcludedHateSpeechRiskEnum) {
    IntegralAdScienceExcludedHateSpeechRiskEnum["HateSpeechUnspecified"] = "HATE_SPEECH_UNSPECIFIED";
    IntegralAdScienceExcludedHateSpeechRiskEnum["HateSpeechHr"] = "HATE_SPEECH_HR";
    IntegralAdScienceExcludedHateSpeechRiskEnum["HateSpeechHmr"] = "HATE_SPEECH_HMR";
})(IntegralAdScienceExcludedHateSpeechRiskEnum || (IntegralAdScienceExcludedHateSpeechRiskEnum = {}));
export var IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
(function (IntegralAdScienceExcludedIllegalDownloadsRiskEnum) {
    IntegralAdScienceExcludedIllegalDownloadsRiskEnum["IllegalDownloadsUnspecified"] = "ILLEGAL_DOWNLOADS_UNSPECIFIED";
    IntegralAdScienceExcludedIllegalDownloadsRiskEnum["IllegalDownloadsHr"] = "ILLEGAL_DOWNLOADS_HR";
    IntegralAdScienceExcludedIllegalDownloadsRiskEnum["IllegalDownloadsHmr"] = "ILLEGAL_DOWNLOADS_HMR";
})(IntegralAdScienceExcludedIllegalDownloadsRiskEnum || (IntegralAdScienceExcludedIllegalDownloadsRiskEnum = {}));
export var IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
(function (IntegralAdScienceExcludedOffensiveLanguageRiskEnum) {
    IntegralAdScienceExcludedOffensiveLanguageRiskEnum["OffensiveLanguageUnspecified"] = "OFFENSIVE_LANGUAGE_UNSPECIFIED";
    IntegralAdScienceExcludedOffensiveLanguageRiskEnum["OffensiveLanguageHr"] = "OFFENSIVE_LANGUAGE_HR";
    IntegralAdScienceExcludedOffensiveLanguageRiskEnum["OffensiveLanguageHmr"] = "OFFENSIVE_LANGUAGE_HMR";
})(IntegralAdScienceExcludedOffensiveLanguageRiskEnum || (IntegralAdScienceExcludedOffensiveLanguageRiskEnum = {}));
export var IntegralAdScienceExcludedViolenceRiskEnum;
(function (IntegralAdScienceExcludedViolenceRiskEnum) {
    IntegralAdScienceExcludedViolenceRiskEnum["ViolenceUnspecified"] = "VIOLENCE_UNSPECIFIED";
    IntegralAdScienceExcludedViolenceRiskEnum["ViolenceHr"] = "VIOLENCE_HR";
    IntegralAdScienceExcludedViolenceRiskEnum["ViolenceHmr"] = "VIOLENCE_HMR";
})(IntegralAdScienceExcludedViolenceRiskEnum || (IntegralAdScienceExcludedViolenceRiskEnum = {}));
export var IntegralAdScienceTraqScoreOptionEnum;
(function (IntegralAdScienceTraqScoreOptionEnum) {
    IntegralAdScienceTraqScoreOptionEnum["TraqUnspecified"] = "TRAQ_UNSPECIFIED";
    IntegralAdScienceTraqScoreOptionEnum["Traq250"] = "TRAQ_250";
    IntegralAdScienceTraqScoreOptionEnum["Traq500"] = "TRAQ_500";
    IntegralAdScienceTraqScoreOptionEnum["Traq600"] = "TRAQ_600";
    IntegralAdScienceTraqScoreOptionEnum["Traq700"] = "TRAQ_700";
    IntegralAdScienceTraqScoreOptionEnum["Traq750"] = "TRAQ_750";
    IntegralAdScienceTraqScoreOptionEnum["Traq875"] = "TRAQ_875";
    IntegralAdScienceTraqScoreOptionEnum["Traq1000"] = "TRAQ_1000";
})(IntegralAdScienceTraqScoreOptionEnum || (IntegralAdScienceTraqScoreOptionEnum = {}));
export var IntegralAdScienceVideoViewabilityEnum;
(function (IntegralAdScienceVideoViewabilityEnum) {
    IntegralAdScienceVideoViewabilityEnum["VideoViewabilityUnspecified"] = "VIDEO_VIEWABILITY_UNSPECIFIED";
    IntegralAdScienceVideoViewabilityEnum["VideoViewability40"] = "VIDEO_VIEWABILITY_40";
    IntegralAdScienceVideoViewabilityEnum["VideoViewability50"] = "VIDEO_VIEWABILITY_50";
    IntegralAdScienceVideoViewabilityEnum["VideoViewability60"] = "VIDEO_VIEWABILITY_60";
    IntegralAdScienceVideoViewabilityEnum["VideoViewability70"] = "VIDEO_VIEWABILITY_70";
})(IntegralAdScienceVideoViewabilityEnum || (IntegralAdScienceVideoViewabilityEnum = {}));
// IntegralAdScience
/**
 * Details of Integral Ad Science settings.
**/
var IntegralAdScience = /** @class */ (function (_super) {
    __extends(IntegralAdScience, _super);
    function IntegralAdScience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customSegmentId" }),
        __metadata("design:type", Array)
    ], IntegralAdScience.prototype, "customSegmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayViewability" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "displayViewability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeUnrateable" }),
        __metadata("design:type", Boolean)
    ], IntegralAdScience.prototype, "excludeUnrateable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedAdFraudRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedAdFraudRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedAdultRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedAdultRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedAlcoholRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedAlcoholRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedDrugsRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedDrugsRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedGamblingRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedGamblingRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedHateSpeechRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedHateSpeechRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedIllegalDownloadsRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedIllegalDownloadsRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedOffensiveLanguageRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedOffensiveLanguageRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedViolenceRisk" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "excludedViolenceRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traqScoreOption" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "traqScoreOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoViewability" }),
        __metadata("design:type", String)
    ], IntegralAdScience.prototype, "videoViewability", void 0);
    return IntegralAdScience;
}(SpeakeasyBase));
export { IntegralAdScience };
