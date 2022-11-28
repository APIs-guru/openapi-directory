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
export var AchievementDefinitionAchievementTypeEnum;
(function (AchievementDefinitionAchievementTypeEnum) {
    AchievementDefinitionAchievementTypeEnum["AchievementTypeUnspecified"] = "ACHIEVEMENT_TYPE_UNSPECIFIED";
    AchievementDefinitionAchievementTypeEnum["Standard"] = "STANDARD";
    AchievementDefinitionAchievementTypeEnum["Incremental"] = "INCREMENTAL";
})(AchievementDefinitionAchievementTypeEnum || (AchievementDefinitionAchievementTypeEnum = {}));
export var AchievementDefinitionInitialStateEnum;
(function (AchievementDefinitionInitialStateEnum) {
    AchievementDefinitionInitialStateEnum["InitialAchievementStateUnspecified"] = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED";
    AchievementDefinitionInitialStateEnum["Hidden"] = "HIDDEN";
    AchievementDefinitionInitialStateEnum["Revealed"] = "REVEALED";
    AchievementDefinitionInitialStateEnum["Unlocked"] = "UNLOCKED";
})(AchievementDefinitionInitialStateEnum || (AchievementDefinitionInitialStateEnum = {}));
// AchievementDefinition
/**
 * An achievement definition object.
**/
var AchievementDefinition = /** @class */ (function (_super) {
    __extends(AchievementDefinition, _super);
    function AchievementDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=achievementType" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "achievementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experiencePoints" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "experiencePoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedTotalSteps" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "formattedTotalSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialState" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "initialState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRevealedIconUrlDefault" }),
        __metadata("design:type", Boolean)
    ], AchievementDefinition.prototype, "isRevealedIconUrlDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUnlockedIconUrlDefault" }),
        __metadata("design:type", Boolean)
    ], AchievementDefinition.prototype, "isUnlockedIconUrlDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revealedIconUrl" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "revealedIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSteps" }),
        __metadata("design:type", Number)
    ], AchievementDefinition.prototype, "totalSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlockedIconUrl" }),
        __metadata("design:type", String)
    ], AchievementDefinition.prototype, "unlockedIconUrl", void 0);
    return AchievementDefinition;
}(SpeakeasyBase));
export { AchievementDefinition };
