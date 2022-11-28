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
import { RepricingProductReportBuyboxWinningProductStats } from "./repricingproductreportbuyboxwinningproductstats";
import { Date } from "./date";
import { PriceAmount } from "./priceamount";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
export var RepricingProductReportTypeEnum;
(function (RepricingProductReportTypeEnum) {
    RepricingProductReportTypeEnum["RepricingRuleTypeUnspecified"] = "REPRICING_RULE_TYPE_UNSPECIFIED";
    RepricingProductReportTypeEnum["TypeStatsBased"] = "TYPE_STATS_BASED";
    RepricingProductReportTypeEnum["TypeCogsBased"] = "TYPE_COGS_BASED";
    RepricingProductReportTypeEnum["TypeSalesVolumeBased"] = "TYPE_SALES_VOLUME_BASED";
    RepricingProductReportTypeEnum["TypeCompetitivePrice"] = "TYPE_COMPETITIVE_PRICE";
})(RepricingProductReportTypeEnum || (RepricingProductReportTypeEnum = {}));
// RepricingProductReport
/**
 * Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
**/
var RepricingProductReport = /** @class */ (function (_super) {
    __extends(RepricingProductReport, _super);
    function RepricingProductReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationCount" }),
        __metadata("design:type", String)
    ], RepricingProductReport.prototype, "applicationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyboxWinningProductStats" }),
        __metadata("design:type", RepricingProductReportBuyboxWinningProductStats)
    ], RepricingProductReport.prototype, "buyboxWinningProductStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], RepricingProductReport.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highWatermark" }),
        __metadata("design:type", PriceAmount)
    ], RepricingProductReport.prototype, "highWatermark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inapplicabilityDetails", elemType: InapplicabilityDetails }),
        __metadata("design:type", Array)
    ], RepricingProductReport.prototype, "inapplicabilityDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowWatermark" }),
        __metadata("design:type", PriceAmount)
    ], RepricingProductReport.prototype, "lowWatermark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderItemCount" }),
        __metadata("design:type", Number)
    ], RepricingProductReport.prototype, "orderItemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleIds" }),
        __metadata("design:type", Array)
    ], RepricingProductReport.prototype, "ruleIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalGmv" }),
        __metadata("design:type", PriceAmount)
    ], RepricingProductReport.prototype, "totalGmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RepricingProductReport.prototype, "type", void 0);
    return RepricingProductReport;
}(SpeakeasyBase));
export { RepricingProductReport };
