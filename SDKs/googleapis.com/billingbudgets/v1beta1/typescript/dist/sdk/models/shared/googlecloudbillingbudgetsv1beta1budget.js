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
import { GoogleCloudBillingBudgetsV1beta1AllUpdatesRule } from "./googlecloudbillingbudgetsv1beta1allupdatesrule";
import { GoogleCloudBillingBudgetsV1beta1BudgetAmount } from "./googlecloudbillingbudgetsv1beta1budgetamount";
import { GoogleCloudBillingBudgetsV1beta1Filter } from "./googlecloudbillingbudgetsv1beta1filter";
import { GoogleCloudBillingBudgetsV1beta1ThresholdRule } from "./googlecloudbillingbudgetsv1beta1thresholdrule";
// GoogleCloudBillingBudgetsV1beta1Budget
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
var GoogleCloudBillingBudgetsV1beta1Budget = /** @class */ (function (_super) {
    __extends(GoogleCloudBillingBudgetsV1beta1Budget, _super);
    function GoogleCloudBillingBudgetsV1beta1Budget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allUpdatesRule" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1beta1AllUpdatesRule)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "allUpdatesRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1beta1BudgetAmount)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetFilter" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1beta1Filter)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "budgetFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1beta1ThresholdRule }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1beta1Budget.prototype, "thresholdRules", void 0);
    return GoogleCloudBillingBudgetsV1beta1Budget;
}(SpeakeasyBase));
export { GoogleCloudBillingBudgetsV1beta1Budget };
// GoogleCloudBillingBudgetsV1beta1BudgetInput
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
var GoogleCloudBillingBudgetsV1beta1BudgetInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBillingBudgetsV1beta1BudgetInput, _super);
    function GoogleCloudBillingBudgetsV1beta1BudgetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allUpdatesRule" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1beta1AllUpdatesRule)
    ], GoogleCloudBillingBudgetsV1beta1BudgetInput.prototype, "allUpdatesRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1beta1BudgetAmount)
    ], GoogleCloudBillingBudgetsV1beta1BudgetInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetFilter" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1beta1Filter)
    ], GoogleCloudBillingBudgetsV1beta1BudgetInput.prototype, "budgetFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1beta1BudgetInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1beta1BudgetInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1beta1ThresholdRule }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1beta1BudgetInput.prototype, "thresholdRules", void 0);
    return GoogleCloudBillingBudgetsV1beta1BudgetInput;
}(SpeakeasyBase));
export { GoogleCloudBillingBudgetsV1beta1BudgetInput };
