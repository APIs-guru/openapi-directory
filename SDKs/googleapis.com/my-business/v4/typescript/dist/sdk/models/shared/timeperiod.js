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
export var TimePeriodCloseDayEnum;
(function (TimePeriodCloseDayEnum) {
    TimePeriodCloseDayEnum["DayOfWeekUnspecified"] = "DAY_OF_WEEK_UNSPECIFIED";
    TimePeriodCloseDayEnum["Monday"] = "MONDAY";
    TimePeriodCloseDayEnum["Tuesday"] = "TUESDAY";
    TimePeriodCloseDayEnum["Wednesday"] = "WEDNESDAY";
    TimePeriodCloseDayEnum["Thursday"] = "THURSDAY";
    TimePeriodCloseDayEnum["Friday"] = "FRIDAY";
    TimePeriodCloseDayEnum["Saturday"] = "SATURDAY";
    TimePeriodCloseDayEnum["Sunday"] = "SUNDAY";
})(TimePeriodCloseDayEnum || (TimePeriodCloseDayEnum = {}));
export var TimePeriodOpenDayEnum;
(function (TimePeriodOpenDayEnum) {
    TimePeriodOpenDayEnum["DayOfWeekUnspecified"] = "DAY_OF_WEEK_UNSPECIFIED";
    TimePeriodOpenDayEnum["Monday"] = "MONDAY";
    TimePeriodOpenDayEnum["Tuesday"] = "TUESDAY";
    TimePeriodOpenDayEnum["Wednesday"] = "WEDNESDAY";
    TimePeriodOpenDayEnum["Thursday"] = "THURSDAY";
    TimePeriodOpenDayEnum["Friday"] = "FRIDAY";
    TimePeriodOpenDayEnum["Saturday"] = "SATURDAY";
    TimePeriodOpenDayEnum["Sunday"] = "SUNDAY";
})(TimePeriodOpenDayEnum || (TimePeriodOpenDayEnum = {}));
// TimePeriod
/**
 * Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
**/
var TimePeriod = /** @class */ (function (_super) {
    __extends(TimePeriod, _super);
    function TimePeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closeDay" }),
        __metadata("design:type", String)
    ], TimePeriod.prototype, "closeDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closeTime" }),
        __metadata("design:type", String)
    ], TimePeriod.prototype, "closeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openDay" }),
        __metadata("design:type", String)
    ], TimePeriod.prototype, "openDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openTime" }),
        __metadata("design:type", String)
    ], TimePeriod.prototype, "openTime", void 0);
    return TimePeriod;
}(SpeakeasyBase));
export { TimePeriod };
