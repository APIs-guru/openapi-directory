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
import { GoogleCloudBillingBudgetsV1CustomPeriod } from "./googlecloudbillingbudgetsv1customperiod";
export var GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
(function (GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum) {
    GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum["CalendarPeriodUnspecified"] = "CALENDAR_PERIOD_UNSPECIFIED";
    GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum["Month"] = "MONTH";
    GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum["Quarter"] = "QUARTER";
    GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum["Year"] = "YEAR";
})(GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum || (GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum = {}));
export var GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
(function (GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum) {
    GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum["CreditTypesTreatmentUnspecified"] = "CREDIT_TYPES_TREATMENT_UNSPECIFIED";
    GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum["IncludeAllCredits"] = "INCLUDE_ALL_CREDITS";
    GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum["ExcludeAllCredits"] = "EXCLUDE_ALL_CREDITS";
    GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum["IncludeSpecifiedCredits"] = "INCLUDE_SPECIFIED_CREDITS";
})(GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum || (GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum = {}));
// GoogleCloudBillingBudgetsV1Filter
/**
 * A filter for a budget, limiting the scope of the cost to calculate.
**/
var GoogleCloudBillingBudgetsV1Filter = /** @class */ (function (_super) {
    __extends(GoogleCloudBillingBudgetsV1Filter, _super);
    function GoogleCloudBillingBudgetsV1Filter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarPeriod" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "calendarPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "creditTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditTypesTreatment" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "creditTypesTreatment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customPeriod" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1CustomPeriod)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "customPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projects" }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "projects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccounts" }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1Filter.prototype, "subaccounts", void 0);
    return GoogleCloudBillingBudgetsV1Filter;
}(SpeakeasyBase));
export { GoogleCloudBillingBudgetsV1Filter };
