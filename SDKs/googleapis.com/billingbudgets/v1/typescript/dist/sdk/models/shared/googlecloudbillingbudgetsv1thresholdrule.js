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
export var GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;
(function (GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum) {
    GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum["BasisUnspecified"] = "BASIS_UNSPECIFIED";
    GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum["CurrentSpend"] = "CURRENT_SPEND";
    GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum["ForecastedSpend"] = "FORECASTED_SPEND";
})(GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum || (GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = {}));
// GoogleCloudBillingBudgetsV1ThresholdRule
/**
 * ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).
**/
var GoogleCloudBillingBudgetsV1ThresholdRule = /** @class */ (function (_super) {
    __extends(GoogleCloudBillingBudgetsV1ThresholdRule, _super);
    function GoogleCloudBillingBudgetsV1ThresholdRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spendBasis" }),
        __metadata("design:type", String)
    ], GoogleCloudBillingBudgetsV1ThresholdRule.prototype, "spendBasis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdPercent" }),
        __metadata("design:type", Number)
    ], GoogleCloudBillingBudgetsV1ThresholdRule.prototype, "thresholdPercent", void 0);
    return GoogleCloudBillingBudgetsV1ThresholdRule;
}(SpeakeasyBase));
export { GoogleCloudBillingBudgetsV1ThresholdRule };
