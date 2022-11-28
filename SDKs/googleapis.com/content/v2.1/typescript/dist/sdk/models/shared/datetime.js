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
import { TimeZone } from "./timezone";
// DateTime
/**
 * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
**/
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=day" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "day", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "hours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minutes" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=month" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nanos" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "nanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seconds" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "seconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", TimeZone)
    ], DateTime.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utcOffset" }),
        __metadata("design:type", String)
    ], DateTime.prototype, "utcOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], DateTime.prototype, "year", void 0);
    return DateTime;
}(SpeakeasyBase));
export { DateTime };
