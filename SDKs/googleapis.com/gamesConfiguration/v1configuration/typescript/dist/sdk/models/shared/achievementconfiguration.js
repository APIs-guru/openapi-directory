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
import { AchievementConfigurationDetail } from "./achievementconfigurationdetail";
export var AchievementConfigurationAchievementTypeEnum;
(function (AchievementConfigurationAchievementTypeEnum) {
    AchievementConfigurationAchievementTypeEnum["AchievementTypeUnspecified"] = "ACHIEVEMENT_TYPE_UNSPECIFIED";
    AchievementConfigurationAchievementTypeEnum["Standard"] = "STANDARD";
    AchievementConfigurationAchievementTypeEnum["Incremental"] = "INCREMENTAL";
})(AchievementConfigurationAchievementTypeEnum || (AchievementConfigurationAchievementTypeEnum = {}));
export var AchievementConfigurationInitialStateEnum;
(function (AchievementConfigurationInitialStateEnum) {
    AchievementConfigurationInitialStateEnum["InitialStateUnspecified"] = "INITIAL_STATE_UNSPECIFIED";
    AchievementConfigurationInitialStateEnum["Hidden"] = "HIDDEN";
    AchievementConfigurationInitialStateEnum["Revealed"] = "REVEALED";
})(AchievementConfigurationInitialStateEnum || (AchievementConfigurationInitialStateEnum = {}));
// AchievementConfiguration
/**
 * An achievement configuration resource.
**/
var AchievementConfiguration = /** @class */ (function (_super) {
    __extends(AchievementConfiguration, _super);
    function AchievementConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=achievementType" }),
        __metadata("design:type", String)
    ], AchievementConfiguration.prototype, "achievementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", AchievementConfigurationDetail)
    ], AchievementConfiguration.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AchievementConfiguration.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialState" }),
        __metadata("design:type", String)
    ], AchievementConfiguration.prototype, "initialState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AchievementConfiguration.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", AchievementConfigurationDetail)
    ], AchievementConfiguration.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepsToUnlock" }),
        __metadata("design:type", Number)
    ], AchievementConfiguration.prototype, "stepsToUnlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], AchievementConfiguration.prototype, "token", void 0);
    return AchievementConfiguration;
}(SpeakeasyBase));
export { AchievementConfiguration };
