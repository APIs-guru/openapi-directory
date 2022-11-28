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
export var LivingAreaLayoutBalconyExceptionEnum;
(function (LivingAreaLayoutBalconyExceptionEnum) {
    LivingAreaLayoutBalconyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaLayoutBalconyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaLayoutBalconyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaLayoutBalconyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaLayoutBalconyExceptionEnum || (LivingAreaLayoutBalconyExceptionEnum = {}));
export var LivingAreaLayoutLivingAreaSqMetersExceptionEnum;
(function (LivingAreaLayoutLivingAreaSqMetersExceptionEnum) {
    LivingAreaLayoutLivingAreaSqMetersExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaLayoutLivingAreaSqMetersExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaLayoutLivingAreaSqMetersExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaLayoutLivingAreaSqMetersExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaLayoutLivingAreaSqMetersExceptionEnum || (LivingAreaLayoutLivingAreaSqMetersExceptionEnum = {}));
export var LivingAreaLayoutLoftExceptionEnum;
(function (LivingAreaLayoutLoftExceptionEnum) {
    LivingAreaLayoutLoftExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaLayoutLoftExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaLayoutLoftExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaLayoutLoftExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaLayoutLoftExceptionEnum || (LivingAreaLayoutLoftExceptionEnum = {}));
export var LivingAreaLayoutNonSmokingExceptionEnum;
(function (LivingAreaLayoutNonSmokingExceptionEnum) {
    LivingAreaLayoutNonSmokingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaLayoutNonSmokingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaLayoutNonSmokingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaLayoutNonSmokingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaLayoutNonSmokingExceptionEnum || (LivingAreaLayoutNonSmokingExceptionEnum = {}));
export var LivingAreaLayoutPatioExceptionEnum;
(function (LivingAreaLayoutPatioExceptionEnum) {
    LivingAreaLayoutPatioExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaLayoutPatioExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaLayoutPatioExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaLayoutPatioExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaLayoutPatioExceptionEnum || (LivingAreaLayoutPatioExceptionEnum = {}));
export var LivingAreaLayoutStairsExceptionEnum;
(function (LivingAreaLayoutStairsExceptionEnum) {
    LivingAreaLayoutStairsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaLayoutStairsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaLayoutStairsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaLayoutStairsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaLayoutStairsExceptionEnum || (LivingAreaLayoutStairsExceptionEnum = {}));
// LivingAreaLayout
/**
 * Information about the layout of the living area.
**/
var LivingAreaLayout = /** @class */ (function (_super) {
    __extends(LivingAreaLayout, _super);
    function LivingAreaLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balcony" }),
        __metadata("design:type", Boolean)
    ], LivingAreaLayout.prototype, "balcony", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balconyException" }),
        __metadata("design:type", String)
    ], LivingAreaLayout.prototype, "balconyException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=livingAreaSqMeters" }),
        __metadata("design:type", Number)
    ], LivingAreaLayout.prototype, "livingAreaSqMeters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=livingAreaSqMetersException" }),
        __metadata("design:type", String)
    ], LivingAreaLayout.prototype, "livingAreaSqMetersException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loft" }),
        __metadata("design:type", Boolean)
    ], LivingAreaLayout.prototype, "loft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loftException" }),
        __metadata("design:type", String)
    ], LivingAreaLayout.prototype, "loftException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSmoking" }),
        __metadata("design:type", Boolean)
    ], LivingAreaLayout.prototype, "nonSmoking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSmokingException" }),
        __metadata("design:type", String)
    ], LivingAreaLayout.prototype, "nonSmokingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patio" }),
        __metadata("design:type", Boolean)
    ], LivingAreaLayout.prototype, "patio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patioException" }),
        __metadata("design:type", String)
    ], LivingAreaLayout.prototype, "patioException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stairs" }),
        __metadata("design:type", Boolean)
    ], LivingAreaLayout.prototype, "stairs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stairsException" }),
        __metadata("design:type", String)
    ], LivingAreaLayout.prototype, "stairsException", void 0);
    return LivingAreaLayout;
}(SpeakeasyBase));
export { LivingAreaLayout };
