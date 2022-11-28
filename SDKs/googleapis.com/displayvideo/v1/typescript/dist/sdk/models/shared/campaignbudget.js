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
import { DateRange } from "./daterange";
import { PrismaConfig } from "./prismaconfig";
export var CampaignBudgetBudgetUnitEnum;
(function (CampaignBudgetBudgetUnitEnum) {
    CampaignBudgetBudgetUnitEnum["BudgetUnitUnspecified"] = "BUDGET_UNIT_UNSPECIFIED";
    CampaignBudgetBudgetUnitEnum["BudgetUnitCurrency"] = "BUDGET_UNIT_CURRENCY";
    CampaignBudgetBudgetUnitEnum["BudgetUnitImpressions"] = "BUDGET_UNIT_IMPRESSIONS";
})(CampaignBudgetBudgetUnitEnum || (CampaignBudgetBudgetUnitEnum = {}));
export var CampaignBudgetExternalBudgetSourceEnum;
(function (CampaignBudgetExternalBudgetSourceEnum) {
    CampaignBudgetExternalBudgetSourceEnum["ExternalBudgetSourceUnspecified"] = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED";
    CampaignBudgetExternalBudgetSourceEnum["ExternalBudgetSourceNone"] = "EXTERNAL_BUDGET_SOURCE_NONE";
    CampaignBudgetExternalBudgetSourceEnum["ExternalBudgetSourceMediaOcean"] = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN";
})(CampaignBudgetExternalBudgetSourceEnum || (CampaignBudgetExternalBudgetSourceEnum = {}));
// CampaignBudget
/**
 * Settings that control how the campaign budget is allocated.
**/
var CampaignBudget = /** @class */ (function (_super) {
    __extends(CampaignBudget, _super);
    function CampaignBudget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetAmountMicros" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "budgetAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetId" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "budgetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budgetUnit" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "budgetUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], CampaignBudget.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalBudgetId" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "externalBudgetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalBudgetSource" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "externalBudgetSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoiceGroupingId" }),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "invoiceGroupingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prismaConfig" }),
        __metadata("design:type", PrismaConfig)
    ], CampaignBudget.prototype, "prismaConfig", void 0);
    return CampaignBudget;
}(SpeakeasyBase));
export { CampaignBudget };
