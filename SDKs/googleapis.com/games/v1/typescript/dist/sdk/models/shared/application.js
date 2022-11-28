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
import { ImageAsset } from "./imageasset";
import { ApplicationCategory } from "./applicationcategory";
import { Instance } from "./instance";
export var ApplicationEnabledFeaturesEnum;
(function (ApplicationEnabledFeaturesEnum) {
    ApplicationEnabledFeaturesEnum["ApplicationFeatureUnspecified"] = "APPLICATION_FEATURE_UNSPECIFIED";
    ApplicationEnabledFeaturesEnum["Snapshots"] = "SNAPSHOTS";
})(ApplicationEnabledFeaturesEnum || (ApplicationEnabledFeaturesEnum = {}));
// Application
/**
 * The Application resource.
**/
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=achievement_count" }),
        __metadata("design:type", Number)
    ], Application.prototype, "achievementCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: ImageAsset }),
        __metadata("design:type", Array)
    ], Application.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], Application.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", ApplicationCategory)
    ], Application.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Application.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledFeatures" }),
        __metadata("design:type", Array)
    ], Application.prototype, "enabledFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Application.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances", elemType: Instance }),
        __metadata("design:type", Array)
    ], Application.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Application.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" }),
        __metadata("design:type", String)
    ], Application.prototype, "lastUpdatedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leaderboard_count" }),
        __metadata("design:type", Number)
    ], Application.prototype, "leaderboardCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Application.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themeColor" }),
        __metadata("design:type", String)
    ], Application.prototype, "themeColor", void 0);
    return Application;
}(SpeakeasyBase));
export { Application };
