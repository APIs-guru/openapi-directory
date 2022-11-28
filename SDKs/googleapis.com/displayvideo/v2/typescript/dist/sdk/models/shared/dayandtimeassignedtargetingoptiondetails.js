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
export var DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
(function (DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum) {
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["DayOfWeekUnspecified"] = "DAY_OF_WEEK_UNSPECIFIED";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Monday"] = "MONDAY";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Tuesday"] = "TUESDAY";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Wednesday"] = "WEDNESDAY";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Thursday"] = "THURSDAY";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Friday"] = "FRIDAY";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Saturday"] = "SATURDAY";
    DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum["Sunday"] = "SUNDAY";
})(DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum || (DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = {}));
export var DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
(function (DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum) {
    DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum["TimeZoneResolutionUnspecified"] = "TIME_ZONE_RESOLUTION_UNSPECIFIED";
    DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum["TimeZoneResolutionEndUser"] = "TIME_ZONE_RESOLUTION_END_USER";
    DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum["TimeZoneResolutionAdvertiser"] = "TIME_ZONE_RESOLUTION_ADVERTISER";
})(DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum || (DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum = {}));
// DayAndTimeAssignedTargetingOptionDetails
/**
 * Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
**/
var DayAndTimeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(DayAndTimeAssignedTargetingOptionDetails, _super);
    function DayAndTimeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfWeek" }),
        __metadata("design:type", String)
    ], DayAndTimeAssignedTargetingOptionDetails.prototype, "dayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endHour" }),
        __metadata("design:type", Number)
    ], DayAndTimeAssignedTargetingOptionDetails.prototype, "endHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startHour" }),
        __metadata("design:type", Number)
    ], DayAndTimeAssignedTargetingOptionDetails.prototype, "startHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZoneResolution" }),
        __metadata("design:type", String)
    ], DayAndTimeAssignedTargetingOptionDetails.prototype, "timeZoneResolution", void 0);
    return DayAndTimeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { DayAndTimeAssignedTargetingOptionDetails };
