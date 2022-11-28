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
export var SustainableSourcingEcoFriendlyToiletriesExceptionEnum;
(function (SustainableSourcingEcoFriendlyToiletriesExceptionEnum) {
    SustainableSourcingEcoFriendlyToiletriesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingEcoFriendlyToiletriesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingEcoFriendlyToiletriesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingEcoFriendlyToiletriesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingEcoFriendlyToiletriesExceptionEnum || (SustainableSourcingEcoFriendlyToiletriesExceptionEnum = {}));
export var SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum;
(function (SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum) {
    SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum || (SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum = {}));
export var SustainableSourcingOrganicCageFreeEggsExceptionEnum;
(function (SustainableSourcingOrganicCageFreeEggsExceptionEnum) {
    SustainableSourcingOrganicCageFreeEggsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingOrganicCageFreeEggsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingOrganicCageFreeEggsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingOrganicCageFreeEggsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingOrganicCageFreeEggsExceptionEnum || (SustainableSourcingOrganicCageFreeEggsExceptionEnum = {}));
export var SustainableSourcingOrganicFoodAndBeveragesExceptionEnum;
(function (SustainableSourcingOrganicFoodAndBeveragesExceptionEnum) {
    SustainableSourcingOrganicFoodAndBeveragesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingOrganicFoodAndBeveragesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingOrganicFoodAndBeveragesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingOrganicFoodAndBeveragesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingOrganicFoodAndBeveragesExceptionEnum || (SustainableSourcingOrganicFoodAndBeveragesExceptionEnum = {}));
export var SustainableSourcingResponsiblePurchasingPolicyExceptionEnum;
(function (SustainableSourcingResponsiblePurchasingPolicyExceptionEnum) {
    SustainableSourcingResponsiblePurchasingPolicyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingResponsiblePurchasingPolicyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingResponsiblePurchasingPolicyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingResponsiblePurchasingPolicyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingResponsiblePurchasingPolicyExceptionEnum || (SustainableSourcingResponsiblePurchasingPolicyExceptionEnum = {}));
export var SustainableSourcingResponsiblySourcesSeafoodExceptionEnum;
(function (SustainableSourcingResponsiblySourcesSeafoodExceptionEnum) {
    SustainableSourcingResponsiblySourcesSeafoodExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingResponsiblySourcesSeafoodExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingResponsiblySourcesSeafoodExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingResponsiblySourcesSeafoodExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingResponsiblySourcesSeafoodExceptionEnum || (SustainableSourcingResponsiblySourcesSeafoodExceptionEnum = {}));
export var SustainableSourcingVeganMealsExceptionEnum;
(function (SustainableSourcingVeganMealsExceptionEnum) {
    SustainableSourcingVeganMealsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingVeganMealsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingVeganMealsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingVeganMealsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingVeganMealsExceptionEnum || (SustainableSourcingVeganMealsExceptionEnum = {}));
export var SustainableSourcingVegetarianMealsExceptionEnum;
(function (SustainableSourcingVegetarianMealsExceptionEnum) {
    SustainableSourcingVegetarianMealsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainableSourcingVegetarianMealsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainableSourcingVegetarianMealsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainableSourcingVegetarianMealsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainableSourcingVegetarianMealsExceptionEnum || (SustainableSourcingVegetarianMealsExceptionEnum = {}));
// SustainableSourcing
/**
 * Sustainable sourcing practices implemented at the hotel.
**/
var SustainableSourcing = /** @class */ (function (_super) {
    __extends(SustainableSourcing, _super);
    function SustainableSourcing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecoFriendlyToiletries" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "ecoFriendlyToiletries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecoFriendlyToiletriesException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "ecoFriendlyToiletriesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locallySourcedFoodAndBeverages" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "locallySourcedFoodAndBeverages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locallySourcedFoodAndBeveragesException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "locallySourcedFoodAndBeveragesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organicCageFreeEggs" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "organicCageFreeEggs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organicCageFreeEggsException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "organicCageFreeEggsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organicFoodAndBeverages" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "organicFoodAndBeverages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organicFoodAndBeveragesException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "organicFoodAndBeveragesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsiblePurchasingPolicy" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "responsiblePurchasingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsiblePurchasingPolicyException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "responsiblePurchasingPolicyException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsiblySourcesSeafood" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "responsiblySourcesSeafood", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsiblySourcesSeafoodException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "responsiblySourcesSeafoodException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=veganMeals" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "veganMeals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=veganMealsException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "veganMealsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vegetarianMeals" }),
        __metadata("design:type", Boolean)
    ], SustainableSourcing.prototype, "vegetarianMeals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vegetarianMealsException" }),
        __metadata("design:type", String)
    ], SustainableSourcing.prototype, "vegetarianMealsException", void 0);
    return SustainableSourcing;
}(SpeakeasyBase));
export { SustainableSourcing };
