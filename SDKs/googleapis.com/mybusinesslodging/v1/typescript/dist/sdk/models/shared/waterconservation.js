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
export var WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum;
(function (WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum) {
    WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum || (WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum = {}));
export var WaterConservationLinenReuseProgramExceptionEnum;
(function (WaterConservationLinenReuseProgramExceptionEnum) {
    WaterConservationLinenReuseProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WaterConservationLinenReuseProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WaterConservationLinenReuseProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WaterConservationLinenReuseProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WaterConservationLinenReuseProgramExceptionEnum || (WaterConservationLinenReuseProgramExceptionEnum = {}));
export var WaterConservationTowelReuseProgramExceptionEnum;
(function (WaterConservationTowelReuseProgramExceptionEnum) {
    WaterConservationTowelReuseProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WaterConservationTowelReuseProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WaterConservationTowelReuseProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WaterConservationTowelReuseProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WaterConservationTowelReuseProgramExceptionEnum || (WaterConservationTowelReuseProgramExceptionEnum = {}));
export var WaterConservationWaterSavingShowersExceptionEnum;
(function (WaterConservationWaterSavingShowersExceptionEnum) {
    WaterConservationWaterSavingShowersExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WaterConservationWaterSavingShowersExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WaterConservationWaterSavingShowersExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WaterConservationWaterSavingShowersExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WaterConservationWaterSavingShowersExceptionEnum || (WaterConservationWaterSavingShowersExceptionEnum = {}));
export var WaterConservationWaterSavingSinksExceptionEnum;
(function (WaterConservationWaterSavingSinksExceptionEnum) {
    WaterConservationWaterSavingSinksExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WaterConservationWaterSavingSinksExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WaterConservationWaterSavingSinksExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WaterConservationWaterSavingSinksExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WaterConservationWaterSavingSinksExceptionEnum || (WaterConservationWaterSavingSinksExceptionEnum = {}));
export var WaterConservationWaterSavingToiletsExceptionEnum;
(function (WaterConservationWaterSavingToiletsExceptionEnum) {
    WaterConservationWaterSavingToiletsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WaterConservationWaterSavingToiletsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WaterConservationWaterSavingToiletsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WaterConservationWaterSavingToiletsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WaterConservationWaterSavingToiletsExceptionEnum || (WaterConservationWaterSavingToiletsExceptionEnum = {}));
// WaterConservation
/**
 * Water conservation practices implemented at the hotel.
**/
var WaterConservation = /** @class */ (function (_super) {
    __extends(WaterConservation, _super);
    function WaterConservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsWaterUse" }),
        __metadata("design:type", Boolean)
    ], WaterConservation.prototype, "independentOrganizationAuditsWaterUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsWaterUseException" }),
        __metadata("design:type", String)
    ], WaterConservation.prototype, "independentOrganizationAuditsWaterUseException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linenReuseProgram" }),
        __metadata("design:type", Boolean)
    ], WaterConservation.prototype, "linenReuseProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linenReuseProgramException" }),
        __metadata("design:type", String)
    ], WaterConservation.prototype, "linenReuseProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=towelReuseProgram" }),
        __metadata("design:type", Boolean)
    ], WaterConservation.prototype, "towelReuseProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=towelReuseProgramException" }),
        __metadata("design:type", String)
    ], WaterConservation.prototype, "towelReuseProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSavingShowers" }),
        __metadata("design:type", Boolean)
    ], WaterConservation.prototype, "waterSavingShowers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSavingShowersException" }),
        __metadata("design:type", String)
    ], WaterConservation.prototype, "waterSavingShowersException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSavingSinks" }),
        __metadata("design:type", Boolean)
    ], WaterConservation.prototype, "waterSavingSinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSavingSinksException" }),
        __metadata("design:type", String)
    ], WaterConservation.prototype, "waterSavingSinksException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSavingToilets" }),
        __metadata("design:type", Boolean)
    ], WaterConservation.prototype, "waterSavingToilets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSavingToiletsException" }),
        __metadata("design:type", String)
    ], WaterConservation.prototype, "waterSavingToiletsException", void 0);
    return WaterConservation;
}(SpeakeasyBase));
export { WaterConservation };
