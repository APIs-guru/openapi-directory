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
import { Date } from "./date";
// SpecialHourPeriod
/**
 * Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00
**/
var SpecialHourPeriod = /** @class */ (function (_super) {
    __extends(SpecialHourPeriod, _super);
    function SpecialHourPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closeTime" }),
        __metadata("design:type", TimeOfDay)
    ], SpecialHourPeriod.prototype, "closeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], SpecialHourPeriod.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], SpecialHourPeriod.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openTime" }),
        __metadata("design:type", TimeOfDay)
    ], SpecialHourPeriod.prototype, "openTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], SpecialHourPeriod.prototype, "startDate", void 0);
    return SpecialHourPeriod;
}(SpeakeasyBase));
export { SpecialHourPeriod };
