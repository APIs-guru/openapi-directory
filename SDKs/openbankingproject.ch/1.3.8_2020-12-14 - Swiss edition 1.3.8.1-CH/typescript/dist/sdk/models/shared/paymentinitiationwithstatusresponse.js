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
import { Address } from "./address";
import { CreditorAgent7Ch } from "./creditoragent7ch";
import { Amount } from "./amount";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { TransactionStatusEnum } from "./transactionstatusenum";
// PaymentInitiationWithStatusResponse
/**
 * Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.
 *
**/
var PaymentInitiationWithStatusResponse = /** @class */ (function (_super) {
    __extends(PaymentInitiationWithStatusResponse, _super);
    function PaymentInitiationWithStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAccount" }),
        __metadata("design:type", AccountReference16Ch)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAddress" }),
        __metadata("design:type", Address)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAgent" }),
        __metadata("design:type", CreditorAgent7Ch)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorName" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "creditorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorAccount" }),
        __metadata("design:type", AccountReference16Ch)
    ], PaymentInitiationWithStatusResponse.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endToEndIdentification" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructedAmount" }),
        __metadata("design:type", Amount)
    ], PaymentInitiationWithStatusResponse.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purposeCode" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "purposeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remittanceInformationStructured" }),
        __metadata("design:type", RemittanceInformationStructured)
    ], PaymentInitiationWithStatusResponse.prototype, "remittanceInformationStructured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructured" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "remittanceInformationUnstructured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructuredArray" }),
        __metadata("design:type", Array)
    ], PaymentInitiationWithStatusResponse.prototype, "remittanceInformationUnstructuredArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedExecutionDate" }),
        __metadata("design:type", Date)
    ], PaymentInitiationWithStatusResponse.prototype, "requestedExecutionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedExecutionTime" }),
        __metadata("design:type", Date)
    ], PaymentInitiationWithStatusResponse.prototype, "requestedExecutionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionStatus" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "transactionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ultimateCreditor" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "ultimateCreditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ultimateDebtor" }),
        __metadata("design:type", String)
    ], PaymentInitiationWithStatusResponse.prototype, "ultimateDebtor", void 0);
    return PaymentInitiationWithStatusResponse;
}(SpeakeasyBase));
export { PaymentInitiationWithStatusResponse };
