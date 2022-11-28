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
export var IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum;
(function (IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum) {
    IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum || (IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum = {}));
export var IncreasedFoodSafetyDisposableFlatwareExceptionEnum;
(function (IncreasedFoodSafetyDisposableFlatwareExceptionEnum) {
    IncreasedFoodSafetyDisposableFlatwareExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    IncreasedFoodSafetyDisposableFlatwareExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    IncreasedFoodSafetyDisposableFlatwareExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    IncreasedFoodSafetyDisposableFlatwareExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(IncreasedFoodSafetyDisposableFlatwareExceptionEnum || (IncreasedFoodSafetyDisposableFlatwareExceptionEnum = {}));
export var IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum;
(function (IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum) {
    IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum || (IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum = {}));
export var IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum;
(function (IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum) {
    IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum || (IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum = {}));
export var IncreasedFoodSafetySingleUseFoodMenusExceptionEnum;
(function (IncreasedFoodSafetySingleUseFoodMenusExceptionEnum) {
    IncreasedFoodSafetySingleUseFoodMenusExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    IncreasedFoodSafetySingleUseFoodMenusExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    IncreasedFoodSafetySingleUseFoodMenusExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    IncreasedFoodSafetySingleUseFoodMenusExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(IncreasedFoodSafetySingleUseFoodMenusExceptionEnum || (IncreasedFoodSafetySingleUseFoodMenusExceptionEnum = {}));
// IncreasedFoodSafety
/**
 * Increased food safety measures implemented by the hotel during COVID-19.
**/
var IncreasedFoodSafety = /** @class */ (function (_super) {
    __extends(IncreasedFoodSafety, _super);
    function IncreasedFoodSafety() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diningAreasAdditionalSanitation" }),
        __metadata("design:type", Boolean)
    ], IncreasedFoodSafety.prototype, "diningAreasAdditionalSanitation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diningAreasAdditionalSanitationException" }),
        __metadata("design:type", String)
    ], IncreasedFoodSafety.prototype, "diningAreasAdditionalSanitationException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disposableFlatware" }),
        __metadata("design:type", Boolean)
    ], IncreasedFoodSafety.prototype, "disposableFlatware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disposableFlatwareException" }),
        __metadata("design:type", String)
    ], IncreasedFoodSafety.prototype, "disposableFlatwareException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foodPreparationAndServingAdditionalSafety" }),
        __metadata("design:type", Boolean)
    ], IncreasedFoodSafety.prototype, "foodPreparationAndServingAdditionalSafety", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foodPreparationAndServingAdditionalSafetyException" }),
        __metadata("design:type", String)
    ], IncreasedFoodSafety.prototype, "foodPreparationAndServingAdditionalSafetyException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualPackagedMeals" }),
        __metadata("design:type", Boolean)
    ], IncreasedFoodSafety.prototype, "individualPackagedMeals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualPackagedMealsException" }),
        __metadata("design:type", String)
    ], IncreasedFoodSafety.prototype, "individualPackagedMealsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=singleUseFoodMenus" }),
        __metadata("design:type", Boolean)
    ], IncreasedFoodSafety.prototype, "singleUseFoodMenus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=singleUseFoodMenusException" }),
        __metadata("design:type", String)
    ], IncreasedFoodSafety.prototype, "singleUseFoodMenusException", void 0);
    return IncreasedFoodSafety;
}(SpeakeasyBase));
export { IncreasedFoodSafety };
