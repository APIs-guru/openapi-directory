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
export var ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum;
(function (ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum) {
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationUnspecified"] = "VIDEO_DURATION_UNSPECIFIED";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSecondsNone"] = "VIDEO_DURATION_SECONDS_NONE";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds0"] = "VIDEO_DURATION_SECONDS_0";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds1"] = "VIDEO_DURATION_SECONDS_1";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds2"] = "VIDEO_DURATION_SECONDS_2";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds3"] = "VIDEO_DURATION_SECONDS_3";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds4"] = "VIDEO_DURATION_SECONDS_4";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds5"] = "VIDEO_DURATION_SECONDS_5";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds6"] = "VIDEO_DURATION_SECONDS_6";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds7"] = "VIDEO_DURATION_SECONDS_7";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds8"] = "VIDEO_DURATION_SECONDS_8";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds9"] = "VIDEO_DURATION_SECONDS_9";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds10"] = "VIDEO_DURATION_SECONDS_10";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds11"] = "VIDEO_DURATION_SECONDS_11";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds12"] = "VIDEO_DURATION_SECONDS_12";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds13"] = "VIDEO_DURATION_SECONDS_13";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds14"] = "VIDEO_DURATION_SECONDS_14";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds15"] = "VIDEO_DURATION_SECONDS_15";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds30"] = "VIDEO_DURATION_SECONDS_30";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds45"] = "VIDEO_DURATION_SECONDS_45";
    ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum["VideoDurationSeconds60"] = "VIDEO_DURATION_SECONDS_60";
})(ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum || (ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum = {}));
export var ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum;
(function (ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum) {
    ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum["VideoDurationQuartileUnspecified"] = "VIDEO_DURATION_QUARTILE_UNSPECIFIED";
    ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum["VideoDurationQuartileNone"] = "VIDEO_DURATION_QUARTILE_NONE";
    ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum["VideoDurationQuartileFirst"] = "VIDEO_DURATION_QUARTILE_FIRST";
    ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum["VideoDurationQuartileSecond"] = "VIDEO_DURATION_QUARTILE_SECOND";
    ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum["VideoDurationQuartileThird"] = "VIDEO_DURATION_QUARTILE_THIRD";
    ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum["VideoDurationQuartileFourth"] = "VIDEO_DURATION_QUARTILE_FOURTH";
})(ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum || (ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum = {}));
export var ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum;
(function (ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum) {
    ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum["ViewabilityPercentUnspecified"] = "VIEWABILITY_PERCENT_UNSPECIFIED";
    ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum["ViewabilityPercent0"] = "VIEWABILITY_PERCENT_0";
    ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum["ViewabilityPercent25"] = "VIEWABILITY_PERCENT_25";
    ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum["ViewabilityPercent50"] = "VIEWABILITY_PERCENT_50";
    ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum["ViewabilityPercent75"] = "VIEWABILITY_PERCENT_75";
    ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum["ViewabilityPercent100"] = "VIEWABILITY_PERCENT_100";
})(ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum || (ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum = {}));
export var ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum;
(function (ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum) {
    ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum["VideoVolumePercentUnspecified"] = "VIDEO_VOLUME_PERCENT_UNSPECIFIED";
    ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum["VideoVolumePercent0"] = "VIDEO_VOLUME_PERCENT_0";
    ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum["VideoVolumePercent10"] = "VIDEO_VOLUME_PERCENT_10";
})(ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum || (ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum = {}));
// ActiveViewVideoViewabilityMetricConfig
/**
 * Configuration for custom Active View video viewability metrics.
**/
var ActiveViewVideoViewabilityMetricConfig = /** @class */ (function (_super) {
    __extends(ActiveViewVideoViewabilityMetricConfig, _super);
    function ActiveViewVideoViewabilityMetricConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ActiveViewVideoViewabilityMetricConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumDuration" }),
        __metadata("design:type", String)
    ], ActiveViewVideoViewabilityMetricConfig.prototype, "minimumDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumQuartile" }),
        __metadata("design:type", String)
    ], ActiveViewVideoViewabilityMetricConfig.prototype, "minimumQuartile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumViewability" }),
        __metadata("design:type", String)
    ], ActiveViewVideoViewabilityMetricConfig.prototype, "minimumViewability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumVolume" }),
        __metadata("design:type", String)
    ], ActiveViewVideoViewabilityMetricConfig.prototype, "minimumVolume", void 0);
    return ActiveViewVideoViewabilityMetricConfig;
}(SpeakeasyBase));
export { ActiveViewVideoViewabilityMetricConfig };
