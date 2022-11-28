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
export var ViewsFromUnitBeachViewExceptionEnum;
(function (ViewsFromUnitBeachViewExceptionEnum) {
    ViewsFromUnitBeachViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitBeachViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitBeachViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitBeachViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitBeachViewExceptionEnum || (ViewsFromUnitBeachViewExceptionEnum = {}));
export var ViewsFromUnitCityViewExceptionEnum;
(function (ViewsFromUnitCityViewExceptionEnum) {
    ViewsFromUnitCityViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitCityViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitCityViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitCityViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitCityViewExceptionEnum || (ViewsFromUnitCityViewExceptionEnum = {}));
export var ViewsFromUnitGardenViewExceptionEnum;
(function (ViewsFromUnitGardenViewExceptionEnum) {
    ViewsFromUnitGardenViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitGardenViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitGardenViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitGardenViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitGardenViewExceptionEnum || (ViewsFromUnitGardenViewExceptionEnum = {}));
export var ViewsFromUnitLakeViewExceptionEnum;
(function (ViewsFromUnitLakeViewExceptionEnum) {
    ViewsFromUnitLakeViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitLakeViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitLakeViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitLakeViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitLakeViewExceptionEnum || (ViewsFromUnitLakeViewExceptionEnum = {}));
export var ViewsFromUnitLandmarkViewExceptionEnum;
(function (ViewsFromUnitLandmarkViewExceptionEnum) {
    ViewsFromUnitLandmarkViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitLandmarkViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitLandmarkViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitLandmarkViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitLandmarkViewExceptionEnum || (ViewsFromUnitLandmarkViewExceptionEnum = {}));
export var ViewsFromUnitOceanViewExceptionEnum;
(function (ViewsFromUnitOceanViewExceptionEnum) {
    ViewsFromUnitOceanViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitOceanViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitOceanViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitOceanViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitOceanViewExceptionEnum || (ViewsFromUnitOceanViewExceptionEnum = {}));
export var ViewsFromUnitPoolViewExceptionEnum;
(function (ViewsFromUnitPoolViewExceptionEnum) {
    ViewsFromUnitPoolViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitPoolViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitPoolViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitPoolViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitPoolViewExceptionEnum || (ViewsFromUnitPoolViewExceptionEnum = {}));
export var ViewsFromUnitValleyViewExceptionEnum;
(function (ViewsFromUnitValleyViewExceptionEnum) {
    ViewsFromUnitValleyViewExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ViewsFromUnitValleyViewExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ViewsFromUnitValleyViewExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ViewsFromUnitValleyViewExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ViewsFromUnitValleyViewExceptionEnum || (ViewsFromUnitValleyViewExceptionEnum = {}));
// ViewsFromUnit
/**
 * Views available from the guest unit itself.
**/
var ViewsFromUnit = /** @class */ (function (_super) {
    __extends(ViewsFromUnit, _super);
    function ViewsFromUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beachView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "beachView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beachViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "beachViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cityView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "cityView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cityViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "cityViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gardenView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "gardenView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gardenViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "gardenViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lakeView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "lakeView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lakeViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "lakeViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarkView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "landmarkView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarkViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "landmarkViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oceanView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "oceanView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oceanViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "oceanViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poolView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "poolView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poolViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "poolViewException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valleyView" }),
        __metadata("design:type", Boolean)
    ], ViewsFromUnit.prototype, "valleyView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valleyViewException" }),
        __metadata("design:type", String)
    ], ViewsFromUnit.prototype, "valleyViewException", void 0);
    return ViewsFromUnit;
}(SpeakeasyBase));
export { ViewsFromUnit };
