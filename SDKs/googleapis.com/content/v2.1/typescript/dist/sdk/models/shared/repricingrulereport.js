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
import { RepricingRuleReportBuyboxWinningRuleStats } from "./repricingrulereportbuyboxwinningrulestats";
import { Date } from "./date";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
import { PriceAmount } from "./priceamount";
export var RepricingRuleReportTypeEnum;
(function (RepricingRuleReportTypeEnum) {
    RepricingRuleReportTypeEnum["RepricingRuleTypeUnspecified"] = "REPRICING_RULE_TYPE_UNSPECIFIED";
    RepricingRuleReportTypeEnum["TypeStatsBased"] = "TYPE_STATS_BASED";
    RepricingRuleReportTypeEnum["TypeCogsBased"] = "TYPE_COGS_BASED";
    RepricingRuleReportTypeEnum["TypeSalesVolumeBased"] = "TYPE_SALES_VOLUME_BASED";
    RepricingRuleReportTypeEnum["TypeCompetitivePrice"] = "TYPE_COMPETITIVE_PRICE";
})(RepricingRuleReportTypeEnum || (RepricingRuleReportTypeEnum = {}));
// RepricingRuleReport
/**
 * Resource that represents a daily Repricing rule report. Next ID: 11
**/
var RepricingRuleReport = /** @class */ (function (_super) {
    __extends(RepricingRuleReport, _super);
    function RepricingRuleReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyboxWinningRuleStats" }),
        __metadata("design:type", RepricingRuleReportBuyboxWinningRuleStats)
    ], RepricingRuleReport.prototype, "buyboxWinningRuleStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], RepricingRuleReport.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impactedProducts" }),
        __metadata("design:type", Array)
    ], RepricingRuleReport.prototype, "impactedProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inapplicabilityDetails", elemType: InapplicabilityDetails }),
        __metadata("design:type", Array)
    ], RepricingRuleReport.prototype, "inapplicabilityDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inapplicableProducts" }),
        __metadata("design:type", Array)
    ], RepricingRuleReport.prototype, "inapplicableProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderItemCount" }),
        __metadata("design:type", Number)
    ], RepricingRuleReport.prototype, "orderItemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleId" }),
        __metadata("design:type", String)
    ], RepricingRuleReport.prototype, "ruleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalGmv" }),
        __metadata("design:type", PriceAmount)
    ], RepricingRuleReport.prototype, "totalGmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RepricingRuleReport.prototype, "type", void 0);
    return RepricingRuleReport;
}(SpeakeasyBase));
export { RepricingRuleReport };
