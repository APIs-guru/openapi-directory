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
import { GoogleCloudBillingBudgetsV1BudgetAmount } from "./googlecloudbillingbudgetsv1budgetamount";
import { GoogleCloudBillingBudgetsV1Filter } from "./googlecloudbillingbudgetsv1filter";
import { GoogleCloudBillingBudgetsV1NotificationsRule } from "./googlecloudbillingbudgetsv1notificationsrule";
import { GoogleCloudBillingBudgetsV1ThresholdRule } from "./googlecloudbillingbudgetsv1thresholdrule";
// GoogleCloudBillingBudgetsV1Budget
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
var GoogleCloudBillingBudgetsV1Budget = /** @class */ (function (_super) {
    __extends(GoogleCloudBillingBudgetsV1Budget, _super);
    function GoogleCloudBillingBudgetsV1Budget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1BudgetAmount)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetFilter" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1Filter)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "budgetFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationsRule" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1NotificationsRule)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "notificationsRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1ThresholdRule }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1Budget.prototype, "thresholdRules", void 0);
    return GoogleCloudBillingBudgetsV1Budget;
}(SpeakeasyBase));
export { GoogleCloudBillingBudgetsV1Budget };
// GoogleCloudBillingBudgetsV1BudgetInput
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
var GoogleCloudBillingBudgetsV1BudgetInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBillingBudgetsV1BudgetInput, _super);
    function GoogleCloudBillingBudgetsV1BudgetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1BudgetAmount)
    ], GoogleCloudBillingBudgetsV1BudgetInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetFilter" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1Filter)
    ], GoogleCloudBillingBudgetsV1BudgetInput.prototype, "budgetFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1BudgetInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1BudgetInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationsRule" }),
        __metadata("design:type", GoogleCloudBillingBudgetsV1NotificationsRule)
    ], GoogleCloudBillingBudgetsV1BudgetInput.prototype, "notificationsRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1ThresholdRule }),
        __metadata("design:type", Array)
    ], GoogleCloudBillingBudgetsV1BudgetInput.prototype, "thresholdRules", void 0);
    return GoogleCloudBillingBudgetsV1BudgetInput;
}(SpeakeasyBase));
export { GoogleCloudBillingBudgetsV1BudgetInput };
