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
import { ChargeBearerEnum } from "./chargebearerenum";
import { AccountReference16Ch } from "./accountreference16ch";
import { Address } from "./address";
import { CreditorAgent7Ch } from "./creditoragent7ch";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { DebtorAgent7Ch } from "./debtoragent7ch";
import { Amount } from "./amount";
import { ExchangeRateInformation1 } from "./exchangerateinformation1";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { ExternalServiceLevel1CodeEnum } from "./externalservicelevel1codeenum";
// PeriodicPaymentInitiationJson
/**
 * Generic Body for a periodic payment initation via JSON.
 *
 * This generic JSON body can be used to represent valid periodic payment initiations for the following JSON based payment product,
 * which where defined in the Implementation Guidelines:
 *
 *   * domestic-swiss-credit-transfers-isr
 *   * domestic-swiss-credit-transfers
 *   * domestic-swiss-credit-transfers-qr
 *   * domestic-swiss-foreign-credit-transfers
 *   * swiss-sepa-credit-transfers
 *   * swiss-cross-border-credit-transfers
 *
 * For the convenience of the implementer additional which are already predefinded in the Implementation Guidelines
 * are included (but commented in source code), such that an ASPSP may add them easily.
 *
 * Take care: Since the format is intended to fit for all payment products
 * there are additional conditions which are NOT covered by this specification.
 * Please check the SIX Swiss Payment Standards implementation guidelines for details.
 *
 *
 * The following data element are depending on the actual payment product available (in source code):
 *
 * <table style="width:100%">
 * <tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>
 * <tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>
 * <tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>debtorAccount (incl. type)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>debtorAgent</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>
 * <tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>
 * <tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>
 * <tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>
 * <tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>
 * <tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>requestedExecutionDate</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>requestedExecutionTime</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>
 * <tr><td>startDate</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>endDate</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>executionRule</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>frequency</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>dayOfExecution</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td></tr>
 * </table>
 *
 * Footnotes from the table:
 * 1) This element may only be used by agreement with the instructed financial institution.
 * 2) The element may only be used in consultation with the financial institution commissioned.
 * 3) The element is currently ignored by financial institutions.
 * 4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.
 * 5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.
 * 6) QR-reference, creditor reference or IPI reference
 * 7) currencyOfTransfer is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.
 * 8) QR-IBAN (CH/LI) must be present.
 *
 * IMPORTANT: In this API definition the following holds:
 *   *  All data elements mentioned above are defined, but some of them are commented,
 *     i.e. they are only visible in the source code and can be used by uncommenting them.
 *   * Data elements which are mandatory in the table above for all payment products
 *     are set to be mandatory in this specification.
 *   * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.
 *   * Data elements which are indicated to be option, conditional or mandatory for at least one payment product
 *     in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.
 *   * Data element which are inticated to be n.a. can be used by the ASPS if needed.
 *     In this case uncomment tthe the relatetd lines in the source code.
 *   * If one uses this data types for some payment products he has to ensure that the used data type is
 *     valid according to the underlying payment product, e.g. by some appropriate validations.
 *
**/
var PeriodicPaymentInitiationJson = /** @class */ (function (_super) {
    __extends(PeriodicPaymentInitiationJson, _super);
    function PeriodicPaymentInitiationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargeBearer" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAccount" }),
        __metadata("design:type", AccountReference16Ch)
    ], PeriodicPaymentInitiationJson.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAddress" }),
        __metadata("design:type", Address)
    ], PeriodicPaymentInitiationJson.prototype, "creditorAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAgent" }),
        __metadata("design:type", CreditorAgent7Ch)
    ], PeriodicPaymentInitiationJson.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorAgentName" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "creditorAgentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorId" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "creditorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorName" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "creditorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorNameAndAddress" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "creditorNameAndAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfExecution" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "dayOfExecution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorAccount" }),
        __metadata("design:type", AccountReference16Ch)
    ], PeriodicPaymentInitiationJson.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorAgent" }),
        __metadata("design:type", DebtorAgent7Ch)
    ], PeriodicPaymentInitiationJson.prototype, "debtorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorId" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "debtorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debtorName" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "debtorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], PeriodicPaymentInitiationJson.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endToEndIdentification" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equivalentAmount" }),
        __metadata("design:type", Amount)
    ], PeriodicPaymentInitiationJson.prototype, "equivalentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeRateInformation" }),
        __metadata("design:type", ExchangeRateInformation1)
    ], PeriodicPaymentInitiationJson.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRule" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "executionRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructedAmount" }),
        __metadata("design:type", Amount)
    ], PeriodicPaymentInitiationJson.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intermediaryAgent" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "intermediaryAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purposeCode" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "purposeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remittanceInformationStructured" }),
        __metadata("design:type", RemittanceInformationStructured)
    ], PeriodicPaymentInitiationJson.prototype, "remittanceInformationStructured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructured" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "remittanceInformationUnstructured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceLevel" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "serviceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], PeriodicPaymentInitiationJson.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionCurrency" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "transactionCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ultimateCreditor" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "ultimateCreditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ultimateDebtor" }),
        __metadata("design:type", String)
    ], PeriodicPaymentInitiationJson.prototype, "ultimateDebtor", void 0);
    return PeriodicPaymentInitiationJson;
}(SpeakeasyBase));
export { PeriodicPaymentInitiationJson };
