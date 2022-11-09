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
import { GoogleAdsHomeservicesLocalservicesV1BookingLead } from "./googleadshomeserviceslocalservicesv1bookinglead";
import { GoogleAdsHomeservicesLocalservicesV1MessageLead } from "./googleadshomeserviceslocalservicesv1messagelead";
import { GoogleAdsHomeservicesLocalservicesV1PhoneLead } from "./googleadshomeserviceslocalservicesv1phonelead";
import { GoogleTypeTimeZone } from "./googletypetimezone";
export var GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum;
(function (GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum) {
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum["ChargeStatusUnspecified"] = "CHARGE_STATUS_UNSPECIFIED";
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum["Charged"] = "CHARGED";
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum["NotCharged"] = "NOT_CHARGED";
})(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum || (GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum = {}));
export var GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum;
(function (GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum) {
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum["LeadTypeUnspecified"] = "LEAD_TYPE_UNSPECIFIED";
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum["Message"] = "MESSAGE";
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum["PhoneCall"] = "PHONE_CALL";
    GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum["Booking"] = "BOOKING";
})(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum || (GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum = {}));
// GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
/**
 * A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
**/
var GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport = /** @class */ (function (_super) {
    __extends(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport, _super);
    function GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=aggregatorInfo" }),
        __metadata("design:type", GoogleAdsHomeservicesLocalservicesV1AggregatorInfo)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "aggregatorInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=bookingLead" }),
        __metadata("design:type", GoogleAdsHomeservicesLocalservicesV1BookingLead)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "bookingLead", void 0);
    __decorate([
        Metadata({ data: "json, name=businessName" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "businessName", void 0);
    __decorate([
        Metadata({ data: "json, name=chargeStatus" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "chargeStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "currencyCode", void 0);
    __decorate([
        Metadata({ data: "json, name=disputeStatus" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "disputeStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=geo" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "geo", void 0);
    __decorate([
        Metadata({ data: "json, name=leadCategory" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "leadCategory", void 0);
    __decorate([
        Metadata({ data: "json, name=leadCreationTimestamp" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "leadCreationTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=leadId" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "leadId", void 0);
    __decorate([
        Metadata({ data: "json, name=leadPrice" }),
        __metadata("design:type", Number)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "leadPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=leadType" }),
        __metadata("design:type", String)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "leadType", void 0);
    __decorate([
        Metadata({ data: "json, name=messageLead" }),
        __metadata("design:type", GoogleAdsHomeservicesLocalservicesV1MessageLead)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "messageLead", void 0);
    __decorate([
        Metadata({ data: "json, name=phoneLead" }),
        __metadata("design:type", GoogleAdsHomeservicesLocalservicesV1PhoneLead)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "phoneLead", void 0);
    __decorate([
        Metadata({ data: "json, name=timezone" }),
        __metadata("design:type", GoogleTypeTimeZone)
    ], GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.prototype, "timezone", void 0);
    return GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport;
}(SpeakeasyBase));
export { GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport };
