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
import { MonthlySchedule } from "./monthlyschedule";
import { TimeOfDay } from "./timeofday";
import { TimeZone } from "./timezone";
import { WeeklySchedule } from "./weeklyschedule";
export var RecurringScheduleFrequencyEnum;
(function (RecurringScheduleFrequencyEnum) {
    RecurringScheduleFrequencyEnum["FrequencyUnspecified"] = "FREQUENCY_UNSPECIFIED";
    RecurringScheduleFrequencyEnum["Weekly"] = "WEEKLY";
    RecurringScheduleFrequencyEnum["Monthly"] = "MONTHLY";
    RecurringScheduleFrequencyEnum["Daily"] = "DAILY";
})(RecurringScheduleFrequencyEnum || (RecurringScheduleFrequencyEnum = {}));
// RecurringSchedule
/**
 * Sets the time for recurring patch deployments.
**/
var RecurringSchedule = /** @class */ (function (_super) {
    __extends(RecurringSchedule, _super);
    function RecurringSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], RecurringSchedule.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], RecurringSchedule.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastExecuteTime" }),
        __metadata("design:type", String)
    ], RecurringSchedule.prototype, "lastExecuteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthly" }),
        __metadata("design:type", MonthlySchedule)
    ], RecurringSchedule.prototype, "monthly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextExecuteTime" }),
        __metadata("design:type", String)
    ], RecurringSchedule.prototype, "nextExecuteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], RecurringSchedule.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeOfDay" }),
        __metadata("design:type", TimeOfDay)
    ], RecurringSchedule.prototype, "timeOfDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", TimeZone)
    ], RecurringSchedule.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weekly" }),
        __metadata("design:type", WeeklySchedule)
    ], RecurringSchedule.prototype, "weekly", void 0);
    return RecurringSchedule;
}(SpeakeasyBase));
export { RecurringSchedule };
// RecurringScheduleInput
/**
 * Sets the time for recurring patch deployments.
**/
var RecurringScheduleInput = /** @class */ (function (_super) {
    __extends(RecurringScheduleInput, _super);
    function RecurringScheduleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], RecurringScheduleInput.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], RecurringScheduleInput.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthly" }),
        __metadata("design:type", MonthlySchedule)
    ], RecurringScheduleInput.prototype, "monthly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], RecurringScheduleInput.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeOfDay" }),
        __metadata("design:type", TimeOfDay)
    ], RecurringScheduleInput.prototype, "timeOfDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", TimeZone)
    ], RecurringScheduleInput.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weekly" }),
        __metadata("design:type", WeeklySchedule)
    ], RecurringScheduleInput.prototype, "weekly", void 0);
    return RecurringScheduleInput;
}(SpeakeasyBase));
export { RecurringScheduleInput };
