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
export var HousekeepingDailyHousekeepingExceptionEnum;
(function (HousekeepingDailyHousekeepingExceptionEnum) {
    HousekeepingDailyHousekeepingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    HousekeepingDailyHousekeepingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    HousekeepingDailyHousekeepingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    HousekeepingDailyHousekeepingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(HousekeepingDailyHousekeepingExceptionEnum || (HousekeepingDailyHousekeepingExceptionEnum = {}));
export var HousekeepingHousekeepingAvailableExceptionEnum;
(function (HousekeepingHousekeepingAvailableExceptionEnum) {
    HousekeepingHousekeepingAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    HousekeepingHousekeepingAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    HousekeepingHousekeepingAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    HousekeepingHousekeepingAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(HousekeepingHousekeepingAvailableExceptionEnum || (HousekeepingHousekeepingAvailableExceptionEnum = {}));
export var HousekeepingTurndownServiceExceptionEnum;
(function (HousekeepingTurndownServiceExceptionEnum) {
    HousekeepingTurndownServiceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    HousekeepingTurndownServiceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    HousekeepingTurndownServiceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    HousekeepingTurndownServiceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(HousekeepingTurndownServiceExceptionEnum || (HousekeepingTurndownServiceExceptionEnum = {}));
// Housekeeping
/**
 * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
**/
var Housekeeping = /** @class */ (function (_super) {
    __extends(Housekeeping, _super);
    function Housekeeping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyHousekeeping" }),
        __metadata("design:type", Boolean)
    ], Housekeeping.prototype, "dailyHousekeeping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyHousekeepingException" }),
        __metadata("design:type", String)
    ], Housekeeping.prototype, "dailyHousekeepingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=housekeepingAvailable" }),
        __metadata("design:type", Boolean)
    ], Housekeeping.prototype, "housekeepingAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=housekeepingAvailableException" }),
        __metadata("design:type", String)
    ], Housekeeping.prototype, "housekeepingAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turndownService" }),
        __metadata("design:type", Boolean)
    ], Housekeeping.prototype, "turndownService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turndownServiceException" }),
        __metadata("design:type", String)
    ], Housekeeping.prototype, "turndownServiceException", void 0);
    return Housekeeping;
}(SpeakeasyBase));
export { Housekeeping };
