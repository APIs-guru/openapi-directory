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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionTemplate } from "./executiontemplate";
export var ScheduleStateEnum;
(function (ScheduleStateEnum) {
    ScheduleStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ScheduleStateEnum["Enabled"] = "ENABLED";
    ScheduleStateEnum["Paused"] = "PAUSED";
    ScheduleStateEnum["Disabled"] = "DISABLED";
    ScheduleStateEnum["UpdateFailed"] = "UPDATE_FAILED";
    ScheduleStateEnum["Initializing"] = "INITIALIZING";
    ScheduleStateEnum["Deleting"] = "DELETING";
})(ScheduleStateEnum || (ScheduleStateEnum = {}));
// Schedule
/**
 * The definition of a schedule.
**/
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    function Schedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=cronSchedule" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "cronSchedule", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=executionTemplate" }),
        __metadata("design:type", ExecutionTemplate)
    ], Schedule.prototype, "executionTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=recentExecutions", elemType: shared.Execution }),
        __metadata("design:type", Array)
    ], Schedule.prototype, "recentExecutions", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "timeZone", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "updateTime", void 0);
    return Schedule;
}(SpeakeasyBase));
export { Schedule };
