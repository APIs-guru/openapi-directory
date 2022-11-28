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
import { AccountReference16Ch } from "./accountreference16ch";
import { DebtorAgent7Ch } from "./debtoragent7ch";
import { PaymentInitiationBulkElementJson } from "./paymentinitiationbulkelementjson";
// BulkPaymentInitiationJson
/**
 * Generic Body for a bulk payment initation via JSON.
 *
 * paymentInformationId is contained in code but commented since it is n.a.
 * and not all ASPSP are able to support this field now.
 * In a later version the field will be mandatory.
 *
**/
var BulkPaymentInitiationJson = /** @class */ (function (_super) {
    __extends(BulkPaymentInitiationJson, _super);
    function BulkPaymentInitiationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchBookingPreferred" }),
        __metadata("design:type", Boolean)
    ], BulkPaymentInitiationJson.prototype, "batchBookingPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorAccount" }),
        __metadata("design:type", AccountReference16Ch)
    ], BulkPaymentInitiationJson.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorAgent" }),
        __metadata("design:type", DebtorAgent7Ch)
    ], BulkPaymentInitiationJson.prototype, "debtorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payments", elemType: PaymentInitiationBulkElementJson }),
        __metadata("design:type", Array)
    ], BulkPaymentInitiationJson.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedExecutionDate" }),
        __metadata("design:type", Date)
    ], BulkPaymentInitiationJson.prototype, "requestedExecutionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedExecutionTime" }),
        __metadata("design:type", Date)
    ], BulkPaymentInitiationJson.prototype, "requestedExecutionTime", void 0);
    return BulkPaymentInitiationJson;
}(SpeakeasyBase));
export { BulkPaymentInitiationJson };
