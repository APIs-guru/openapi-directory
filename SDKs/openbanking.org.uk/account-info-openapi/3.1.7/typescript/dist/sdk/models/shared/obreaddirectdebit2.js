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
import { ObExternalDirectDebitStatus1CodeEnum } from "./obexternaldirectdebitstatus1codeenum";
import { ObActiveOrHistoricCurrencyAndAmount0 } from "./obactiveorhistoriccurrencyandamount0";
import { Links } from "./links";
import { Meta } from "./meta";
// ObReadDirectDebit2DataDirectDebit
/**
 * Account to or from which a cash entry is made.
**/
var ObReadDirectDebit2DataDirectDebit = /** @class */ (function (_super) {
    __extends(ObReadDirectDebit2DataDirectDebit, _super);
    function ObReadDirectDebit2DataDirectDebit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectDebitId" }),
        __metadata("design:type", String)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "directDebitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectDebitStatusCode" }),
        __metadata("design:type", String)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "directDebitStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MandateIdentification" }),
        __metadata("design:type", String)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "mandateIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousPaymentAmount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount0)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "previousPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObReadDirectDebit2DataDirectDebit.prototype, "previousPaymentDateTime", void 0);
    return ObReadDirectDebit2DataDirectDebit;
}(SpeakeasyBase));
export { ObReadDirectDebit2DataDirectDebit };
var ObReadDirectDebit2Data = /** @class */ (function (_super) {
    __extends(ObReadDirectDebit2Data, _super);
    function ObReadDirectDebit2Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectDebit", elemType: ObReadDirectDebit2DataDirectDebit }),
        __metadata("design:type", Array)
    ], ObReadDirectDebit2Data.prototype, "directDebit", void 0);
    return ObReadDirectDebit2Data;
}(SpeakeasyBase));
export { ObReadDirectDebit2Data };
var ObReadDirectDebit2 = /** @class */ (function (_super) {
    __extends(ObReadDirectDebit2, _super);
    function ObReadDirectDebit2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObReadDirectDebit2Data)
    ], ObReadDirectDebit2.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObReadDirectDebit2.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObReadDirectDebit2.prototype, "meta", void 0);
    return ObReadDirectDebit2;
}(SpeakeasyBase));
export { ObReadDirectDebit2 };
