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
export var FrequencyCapTimeUnitEnum;
(function (FrequencyCapTimeUnitEnum) {
    FrequencyCapTimeUnitEnum["TimeUnitUnspecified"] = "TIME_UNIT_UNSPECIFIED";
    FrequencyCapTimeUnitEnum["TimeUnitLifetime"] = "TIME_UNIT_LIFETIME";
    FrequencyCapTimeUnitEnum["TimeUnitMonths"] = "TIME_UNIT_MONTHS";
    FrequencyCapTimeUnitEnum["TimeUnitWeeks"] = "TIME_UNIT_WEEKS";
    FrequencyCapTimeUnitEnum["TimeUnitDays"] = "TIME_UNIT_DAYS";
    FrequencyCapTimeUnitEnum["TimeUnitHours"] = "TIME_UNIT_HOURS";
    FrequencyCapTimeUnitEnum["TimeUnitMinutes"] = "TIME_UNIT_MINUTES";
})(FrequencyCapTimeUnitEnum || (FrequencyCapTimeUnitEnum = {}));
// FrequencyCap
/**
 * Settings that control the number of times a user may be shown with the same ad during a given time period.
**/
var FrequencyCap = /** @class */ (function (_super) {
    __extends(FrequencyCap, _super);
    function FrequencyCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxImpressions" }),
        __metadata("design:type", Number)
    ], FrequencyCap.prototype, "maxImpressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeUnit" }),
        __metadata("design:type", String)
    ], FrequencyCap.prototype, "timeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeUnitCount" }),
        __metadata("design:type", Number)
    ], FrequencyCap.prototype, "timeUnitCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], FrequencyCap.prototype, "unlimited", void 0);
    return FrequencyCap;
}(SpeakeasyBase));
export { FrequencyCap };
