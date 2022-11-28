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
export var WasteReductionCompostableFoodContainersAndCutleryExceptionEnum;
(function (WasteReductionCompostableFoodContainersAndCutleryExceptionEnum) {
    WasteReductionCompostableFoodContainersAndCutleryExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionCompostableFoodContainersAndCutleryExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionCompostableFoodContainersAndCutleryExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionCompostableFoodContainersAndCutleryExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionCompostableFoodContainersAndCutleryExceptionEnum || (WasteReductionCompostableFoodContainersAndCutleryExceptionEnum = {}));
export var WasteReductionCompostsExcessFoodExceptionEnum;
(function (WasteReductionCompostsExcessFoodExceptionEnum) {
    WasteReductionCompostsExcessFoodExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionCompostsExcessFoodExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionCompostsExcessFoodExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionCompostsExcessFoodExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionCompostsExcessFoodExceptionEnum || (WasteReductionCompostsExcessFoodExceptionEnum = {}));
export var WasteReductionDonatesExcessFoodExceptionEnum;
(function (WasteReductionDonatesExcessFoodExceptionEnum) {
    WasteReductionDonatesExcessFoodExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionDonatesExcessFoodExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionDonatesExcessFoodExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionDonatesExcessFoodExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionDonatesExcessFoodExceptionEnum || (WasteReductionDonatesExcessFoodExceptionEnum = {}));
export var WasteReductionFoodWasteReductionProgramExceptionEnum;
(function (WasteReductionFoodWasteReductionProgramExceptionEnum) {
    WasteReductionFoodWasteReductionProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionFoodWasteReductionProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionFoodWasteReductionProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionFoodWasteReductionProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionFoodWasteReductionProgramExceptionEnum || (WasteReductionFoodWasteReductionProgramExceptionEnum = {}));
export var WasteReductionNoSingleUsePlasticStrawsExceptionEnum;
(function (WasteReductionNoSingleUsePlasticStrawsExceptionEnum) {
    WasteReductionNoSingleUsePlasticStrawsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionNoSingleUsePlasticStrawsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionNoSingleUsePlasticStrawsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionNoSingleUsePlasticStrawsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionNoSingleUsePlasticStrawsExceptionEnum || (WasteReductionNoSingleUsePlasticStrawsExceptionEnum = {}));
export var WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum;
(function (WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum) {
    WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum || (WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum = {}));
export var WasteReductionNoStyrofoamFoodContainersExceptionEnum;
(function (WasteReductionNoStyrofoamFoodContainersExceptionEnum) {
    WasteReductionNoStyrofoamFoodContainersExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionNoStyrofoamFoodContainersExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionNoStyrofoamFoodContainersExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionNoStyrofoamFoodContainersExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionNoStyrofoamFoodContainersExceptionEnum || (WasteReductionNoStyrofoamFoodContainersExceptionEnum = {}));
export var WasteReductionRecyclingProgramExceptionEnum;
(function (WasteReductionRecyclingProgramExceptionEnum) {
    WasteReductionRecyclingProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionRecyclingProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionRecyclingProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionRecyclingProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionRecyclingProgramExceptionEnum || (WasteReductionRecyclingProgramExceptionEnum = {}));
export var WasteReductionRefillableToiletryContainersExceptionEnum;
(function (WasteReductionRefillableToiletryContainersExceptionEnum) {
    WasteReductionRefillableToiletryContainersExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionRefillableToiletryContainersExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionRefillableToiletryContainersExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionRefillableToiletryContainersExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionRefillableToiletryContainersExceptionEnum || (WasteReductionRefillableToiletryContainersExceptionEnum = {}));
export var WasteReductionSafelyDisposesBatteriesExceptionEnum;
(function (WasteReductionSafelyDisposesBatteriesExceptionEnum) {
    WasteReductionSafelyDisposesBatteriesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionSafelyDisposesBatteriesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionSafelyDisposesBatteriesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionSafelyDisposesBatteriesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionSafelyDisposesBatteriesExceptionEnum || (WasteReductionSafelyDisposesBatteriesExceptionEnum = {}));
export var WasteReductionSafelyDisposesElectronicsExceptionEnum;
(function (WasteReductionSafelyDisposesElectronicsExceptionEnum) {
    WasteReductionSafelyDisposesElectronicsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionSafelyDisposesElectronicsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionSafelyDisposesElectronicsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionSafelyDisposesElectronicsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionSafelyDisposesElectronicsExceptionEnum || (WasteReductionSafelyDisposesElectronicsExceptionEnum = {}));
export var WasteReductionSafelyDisposesLightbulbsExceptionEnum;
(function (WasteReductionSafelyDisposesLightbulbsExceptionEnum) {
    WasteReductionSafelyDisposesLightbulbsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionSafelyDisposesLightbulbsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionSafelyDisposesLightbulbsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionSafelyDisposesLightbulbsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionSafelyDisposesLightbulbsExceptionEnum || (WasteReductionSafelyDisposesLightbulbsExceptionEnum = {}));
export var WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum;
(function (WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum) {
    WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum || (WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum = {}));
export var WasteReductionSoapDonationProgramExceptionEnum;
(function (WasteReductionSoapDonationProgramExceptionEnum) {
    WasteReductionSoapDonationProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionSoapDonationProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionSoapDonationProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionSoapDonationProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionSoapDonationProgramExceptionEnum || (WasteReductionSoapDonationProgramExceptionEnum = {}));
export var WasteReductionToiletryDonationProgramExceptionEnum;
(function (WasteReductionToiletryDonationProgramExceptionEnum) {
    WasteReductionToiletryDonationProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionToiletryDonationProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionToiletryDonationProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionToiletryDonationProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionToiletryDonationProgramExceptionEnum || (WasteReductionToiletryDonationProgramExceptionEnum = {}));
export var WasteReductionWaterBottleFillingStationsExceptionEnum;
(function (WasteReductionWaterBottleFillingStationsExceptionEnum) {
    WasteReductionWaterBottleFillingStationsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WasteReductionWaterBottleFillingStationsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WasteReductionWaterBottleFillingStationsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WasteReductionWaterBottleFillingStationsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WasteReductionWaterBottleFillingStationsExceptionEnum || (WasteReductionWaterBottleFillingStationsExceptionEnum = {}));
// WasteReduction
/**
 * Waste reduction practices implemented at the hotel.
**/
var WasteReduction = /** @class */ (function (_super) {
    __extends(WasteReduction, _super);
    function WasteReduction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compostableFoodContainersAndCutlery" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "compostableFoodContainersAndCutlery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compostableFoodContainersAndCutleryException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "compostableFoodContainersAndCutleryException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compostsExcessFood" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "compostsExcessFood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compostsExcessFoodException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "compostsExcessFoodException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=donatesExcessFood" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "donatesExcessFood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=donatesExcessFoodException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "donatesExcessFoodException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foodWasteReductionProgram" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "foodWasteReductionProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foodWasteReductionProgramException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "foodWasteReductionProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticStraws" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "noSingleUsePlasticStraws", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticStrawsException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "noSingleUsePlasticStrawsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticWaterBottles" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "noSingleUsePlasticWaterBottles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticWaterBottlesException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "noSingleUsePlasticWaterBottlesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noStyrofoamFoodContainers" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "noStyrofoamFoodContainers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noStyrofoamFoodContainersException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "noStyrofoamFoodContainersException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recyclingProgram" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "recyclingProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recyclingProgramException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "recyclingProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refillableToiletryContainers" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "refillableToiletryContainers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refillableToiletryContainersException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "refillableToiletryContainersException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyDisposesBatteries" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "safelyDisposesBatteries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyDisposesBatteriesException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "safelyDisposesBatteriesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyDisposesElectronics" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "safelyDisposesElectronics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyDisposesElectronicsException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "safelyDisposesElectronicsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyDisposesLightbulbs" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "safelyDisposesLightbulbs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyDisposesLightbulbsException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "safelyDisposesLightbulbsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyHandlesHazardousSubstances" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "safelyHandlesHazardousSubstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safelyHandlesHazardousSubstancesException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "safelyHandlesHazardousSubstancesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=soapDonationProgram" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "soapDonationProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=soapDonationProgramException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "soapDonationProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toiletryDonationProgram" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "toiletryDonationProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toiletryDonationProgramException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "toiletryDonationProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterBottleFillingStations" }),
        __metadata("design:type", Boolean)
    ], WasteReduction.prototype, "waterBottleFillingStations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterBottleFillingStationsException" }),
        __metadata("design:type", String)
    ], WasteReduction.prototype, "waterBottleFillingStationsException", void 0);
    return WasteReduction;
}(SpeakeasyBase));
export { WasteReduction };
