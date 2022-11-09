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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
// GoogleAdsHomeservicesLocalservicesV1AccountReport
/**
 * An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
**/
var GoogleAdsHomeservicesLocalservicesV1AccountReport = /** @class */ (function (_super) {
    __extends(GoogleAdsHomeservicesLocalservicesV1AccountReport, _super);
    function GoogleAdsHomeservicesLocalservicesV1AccountReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=aggregatorInfo" }),
        __metadata("design:type", GoogleAdsHomeservicesLocalservicesV1AggregatorInfo)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "aggregatorInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=averageFiveStarRating" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "averageFiveStarRating", void 0);
    __decorate([
        Metadata({ data: "json, name=averageWeeklyBudget" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "averageWeeklyBudget", void 0);
    __decorate([
        Metadata({ data: "json, name=businessName" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "businessName", void 0);
    __decorate([
        Metadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "currencyCode", void 0);
    __decorate([
        Metadata({ data: "json, name=currentPeriodChargedLeads" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "currentPeriodChargedLeads", void 0);
    __decorate([
        Metadata({ data: "json, name=currentPeriodConnectedPhoneCalls" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "currentPeriodConnectedPhoneCalls", void 0);
    __decorate([
        Metadata({ data: "json, name=currentPeriodPhoneCalls" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "currentPeriodPhoneCalls", void 0);
    __decorate([
        Metadata({ data: "json, name=currentPeriodTotalCost" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "currentPeriodTotalCost", void 0);
    __decorate([
        Metadata({ data: "json, name=impressionsLastTwoDays" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "impressionsLastTwoDays", void 0);
    __decorate([
        Metadata({ data: "json, name=phoneLeadResponsiveness" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "phoneLeadResponsiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=previousPeriodChargedLeads" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "previousPeriodChargedLeads", void 0);
    __decorate([
        Metadata({ data: "json, name=previousPeriodConnectedPhoneCalls" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "previousPeriodConnectedPhoneCalls", void 0);
    __decorate([
        Metadata({ data: "json, name=previousPeriodPhoneCalls" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "previousPeriodPhoneCalls", void 0);
    __decorate([
        Metadata({ data: "json, name=previousPeriodTotalCost" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "previousPeriodTotalCost", void 0);
    __decorate([
        Metadata({ data: "json, name=totalReview" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1AccountReport.prototype, "totalReview", void 0);
    return GoogleAdsHomeservicesLocalservicesV1AccountReport;
}(SpeakeasyBase));
export { GoogleAdsHomeservicesLocalservicesV1AccountReport };
