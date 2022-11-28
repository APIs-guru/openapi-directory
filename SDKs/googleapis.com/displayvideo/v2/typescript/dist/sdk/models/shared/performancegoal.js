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
export var PerformanceGoalPerformanceGoalTypeEnum;
(function (PerformanceGoalPerformanceGoalTypeEnum) {
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeUnspecified"] = "PERFORMANCE_GOAL_TYPE_UNSPECIFIED";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeCpm"] = "PERFORMANCE_GOAL_TYPE_CPM";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeCpc"] = "PERFORMANCE_GOAL_TYPE_CPC";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeCpa"] = "PERFORMANCE_GOAL_TYPE_CPA";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeCtr"] = "PERFORMANCE_GOAL_TYPE_CTR";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeViewability"] = "PERFORMANCE_GOAL_TYPE_VIEWABILITY";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeCpiavc"] = "PERFORMANCE_GOAL_TYPE_CPIAVC";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeCpe"] = "PERFORMANCE_GOAL_TYPE_CPE";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeClickCvr"] = "PERFORMANCE_GOAL_TYPE_CLICK_CVR";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeImpressionCvr"] = "PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeVcpm"] = "PERFORMANCE_GOAL_TYPE_VCPM";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeVtr"] = "PERFORMANCE_GOAL_TYPE_VTR";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeAudioCompletionRate"] = "PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeVideoCompletionRate"] = "PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE";
    PerformanceGoalPerformanceGoalTypeEnum["PerformanceGoalTypeOther"] = "PERFORMANCE_GOAL_TYPE_OTHER";
})(PerformanceGoalPerformanceGoalTypeEnum || (PerformanceGoalPerformanceGoalTypeEnum = {}));
// PerformanceGoal
/**
 * Settings that control the performance goal of a campaign or insertion order.
**/
var PerformanceGoal = /** @class */ (function (_super) {
    __extends(PerformanceGoal, _super);
    function PerformanceGoal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoalAmountMicros" }),
        __metadata("design:type", String)
    ], PerformanceGoal.prototype, "performanceGoalAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoalPercentageMicros" }),
        __metadata("design:type", String)
    ], PerformanceGoal.prototype, "performanceGoalPercentageMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoalString" }),
        __metadata("design:type", String)
    ], PerformanceGoal.prototype, "performanceGoalString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoalType" }),
        __metadata("design:type", String)
    ], PerformanceGoal.prototype, "performanceGoalType", void 0);
    return PerformanceGoal;
}(SpeakeasyBase));
export { PerformanceGoal };
