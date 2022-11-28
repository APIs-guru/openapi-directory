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
import { CampaignSummary } from "./campaignsummary";
export var InvoiceInvoiceTypeEnum;
(function (InvoiceInvoiceTypeEnum) {
    InvoiceInvoiceTypeEnum["InvoiceTypeUnspecified"] = "INVOICE_TYPE_UNSPECIFIED";
    InvoiceInvoiceTypeEnum["InvoiceTypeCredit"] = "INVOICE_TYPE_CREDIT";
    InvoiceInvoiceTypeEnum["InvoiceTypeInvoice"] = "INVOICE_TYPE_INVOICE";
})(InvoiceInvoiceTypeEnum || (InvoiceInvoiceTypeEnum = {}));
// Invoice
/**
 * Contains information about a single invoice
**/
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaign_summaries", elemType: CampaignSummary }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "campaignSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctedInvoiceId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "correctedInvoiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dueDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoiceType" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "invoiceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsAccountId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "paymentsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsProfileId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "paymentsProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdfUrl" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "purchaseOrderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacedInvoiceIds" }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "replacedInvoiceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceEndDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "serviceEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceStartDate" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "serviceStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtotalAmountMicros" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "subtotalAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalAmountMicros" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "totalAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalTaxAmountMicros" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "totalTaxAmountMicros", void 0);
    return Invoice;
}(SpeakeasyBase));
export { Invoice };
