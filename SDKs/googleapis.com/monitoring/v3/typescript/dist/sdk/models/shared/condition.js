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
import { MetricAbsence } from "./metricabsence";
import { LogMatch } from "./logmatch";
import { MonitoringQueryLanguageCondition } from "./monitoringquerylanguagecondition";
import { MetricThreshold } from "./metricthreshold";
// Condition
/**
 * A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
**/
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionAbsent" }),
        __metadata("design:type", MetricAbsence)
    ], Condition.prototype, "conditionAbsent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionMatchedLog" }),
        __metadata("design:type", LogMatch)
    ], Condition.prototype, "conditionMatchedLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionMonitoringQueryLanguage" }),
        __metadata("design:type", MonitoringQueryLanguageCondition)
    ], Condition.prototype, "conditionMonitoringQueryLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionThreshold" }),
        __metadata("design:type", MetricThreshold)
    ], Condition.prototype, "conditionThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Condition.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Condition.prototype, "name", void 0);
    return Condition;
}(SpeakeasyBase));
export { Condition };
