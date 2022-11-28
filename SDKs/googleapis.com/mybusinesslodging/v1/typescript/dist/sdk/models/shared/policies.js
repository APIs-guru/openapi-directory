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
import { TimeOfDay } from "./timeofday";
import { PaymentOptions } from "./paymentoptions";
export var PoliciesAllInclusiveAvailableExceptionEnum;
(function (PoliciesAllInclusiveAvailableExceptionEnum) {
    PoliciesAllInclusiveAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesAllInclusiveAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesAllInclusiveAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesAllInclusiveAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesAllInclusiveAvailableExceptionEnum || (PoliciesAllInclusiveAvailableExceptionEnum = {}));
export var PoliciesAllInclusiveOnlyExceptionEnum;
(function (PoliciesAllInclusiveOnlyExceptionEnum) {
    PoliciesAllInclusiveOnlyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesAllInclusiveOnlyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesAllInclusiveOnlyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesAllInclusiveOnlyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesAllInclusiveOnlyExceptionEnum || (PoliciesAllInclusiveOnlyExceptionEnum = {}));
export var PoliciesCheckinTimeExceptionEnum;
(function (PoliciesCheckinTimeExceptionEnum) {
    PoliciesCheckinTimeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesCheckinTimeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesCheckinTimeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesCheckinTimeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesCheckinTimeExceptionEnum || (PoliciesCheckinTimeExceptionEnum = {}));
export var PoliciesCheckoutTimeExceptionEnum;
(function (PoliciesCheckoutTimeExceptionEnum) {
    PoliciesCheckoutTimeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesCheckoutTimeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesCheckoutTimeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesCheckoutTimeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesCheckoutTimeExceptionEnum || (PoliciesCheckoutTimeExceptionEnum = {}));
export var PoliciesKidsStayFreeExceptionEnum;
(function (PoliciesKidsStayFreeExceptionEnum) {
    PoliciesKidsStayFreeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesKidsStayFreeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesKidsStayFreeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesKidsStayFreeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesKidsStayFreeExceptionEnum || (PoliciesKidsStayFreeExceptionEnum = {}));
export var PoliciesMaxChildAgeExceptionEnum;
(function (PoliciesMaxChildAgeExceptionEnum) {
    PoliciesMaxChildAgeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesMaxChildAgeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesMaxChildAgeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesMaxChildAgeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesMaxChildAgeExceptionEnum || (PoliciesMaxChildAgeExceptionEnum = {}));
export var PoliciesMaxKidsStayFreeCountExceptionEnum;
(function (PoliciesMaxKidsStayFreeCountExceptionEnum) {
    PoliciesMaxKidsStayFreeCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesMaxKidsStayFreeCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesMaxKidsStayFreeCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesMaxKidsStayFreeCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesMaxKidsStayFreeCountExceptionEnum || (PoliciesMaxKidsStayFreeCountExceptionEnum = {}));
export var PoliciesSmokeFreePropertyExceptionEnum;
(function (PoliciesSmokeFreePropertyExceptionEnum) {
    PoliciesSmokeFreePropertyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PoliciesSmokeFreePropertyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PoliciesSmokeFreePropertyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PoliciesSmokeFreePropertyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PoliciesSmokeFreePropertyExceptionEnum || (PoliciesSmokeFreePropertyExceptionEnum = {}));
// Policies
/**
 * Property rules that impact guests.
**/
var Policies = /** @class */ (function (_super) {
    __extends(Policies, _super);
    function Policies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allInclusiveAvailable" }),
        __metadata("design:type", Boolean)
    ], Policies.prototype, "allInclusiveAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allInclusiveAvailableException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "allInclusiveAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allInclusiveOnly" }),
        __metadata("design:type", Boolean)
    ], Policies.prototype, "allInclusiveOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allInclusiveOnlyException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "allInclusiveOnlyException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkinTime" }),
        __metadata("design:type", TimeOfDay)
    ], Policies.prototype, "checkinTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkinTimeException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "checkinTimeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkoutTime" }),
        __metadata("design:type", TimeOfDay)
    ], Policies.prototype, "checkoutTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkoutTimeException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "checkoutTimeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kidsStayFree" }),
        __metadata("design:type", Boolean)
    ], Policies.prototype, "kidsStayFree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kidsStayFreeException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "kidsStayFreeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxChildAge" }),
        __metadata("design:type", Number)
    ], Policies.prototype, "maxChildAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxChildAgeException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "maxChildAgeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxKidsStayFreeCount" }),
        __metadata("design:type", Number)
    ], Policies.prototype, "maxKidsStayFreeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxKidsStayFreeCountException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "maxKidsStayFreeCountException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentOptions" }),
        __metadata("design:type", PaymentOptions)
    ], Policies.prototype, "paymentOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smokeFreeProperty" }),
        __metadata("design:type", Boolean)
    ], Policies.prototype, "smokeFreeProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smokeFreePropertyException" }),
        __metadata("design:type", String)
    ], Policies.prototype, "smokeFreePropertyException", void 0);
    return Policies;
}(SpeakeasyBase));
export { Policies };
