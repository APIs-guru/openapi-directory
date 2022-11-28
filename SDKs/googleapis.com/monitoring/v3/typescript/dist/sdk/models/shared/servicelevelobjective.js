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
import { ServiceLevelIndicator } from "./servicelevelindicator";
export var ServiceLevelObjectiveCalendarPeriodEnum;
(function (ServiceLevelObjectiveCalendarPeriodEnum) {
    ServiceLevelObjectiveCalendarPeriodEnum["CalendarPeriodUnspecified"] = "CALENDAR_PERIOD_UNSPECIFIED";
    ServiceLevelObjectiveCalendarPeriodEnum["Day"] = "DAY";
    ServiceLevelObjectiveCalendarPeriodEnum["Week"] = "WEEK";
    ServiceLevelObjectiveCalendarPeriodEnum["Fortnight"] = "FORTNIGHT";
    ServiceLevelObjectiveCalendarPeriodEnum["Month"] = "MONTH";
    ServiceLevelObjectiveCalendarPeriodEnum["Quarter"] = "QUARTER";
    ServiceLevelObjectiveCalendarPeriodEnum["Half"] = "HALF";
    ServiceLevelObjectiveCalendarPeriodEnum["Year"] = "YEAR";
})(ServiceLevelObjectiveCalendarPeriodEnum || (ServiceLevelObjectiveCalendarPeriodEnum = {}));
// ServiceLevelObjective
/**
 * A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
**/
var ServiceLevelObjective = /** @class */ (function (_super) {
    __extends(ServiceLevelObjective, _super);
    function ServiceLevelObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarPeriod" }),
        __metadata("design:type", String)
    ], ServiceLevelObjective.prototype, "calendarPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ServiceLevelObjective.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goal" }),
        __metadata("design:type", Number)
    ], ServiceLevelObjective.prototype, "goal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceLevelObjective.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollingPeriod" }),
        __metadata("design:type", String)
    ], ServiceLevelObjective.prototype, "rollingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceLevelIndicator" }),
        __metadata("design:type", ServiceLevelIndicator)
    ], ServiceLevelObjective.prototype, "serviceLevelIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], ServiceLevelObjective.prototype, "userLabels", void 0);
    return ServiceLevelObjective;
}(SpeakeasyBase));
export { ServiceLevelObjective };
