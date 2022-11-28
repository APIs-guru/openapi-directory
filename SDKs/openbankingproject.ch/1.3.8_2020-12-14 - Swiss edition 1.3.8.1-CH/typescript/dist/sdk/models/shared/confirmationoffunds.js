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
import { Amount } from "./amount";
// ConfirmationOfFunds
/**
 * JSON Request body for the "Confirmation of funds service".
 *
 * <table>
 * <tr>
 *   <td>cardNumber</td>
 *   <td>String </td>
 *   <td>Optional</td>
 *   <td>Card Number of the card issued by the PIISP. Should be delivered if available.</td>
 * </tr>
 * <tr>
 *   <td>account</td>
 *   <td> Account Reference</td>
 *   <td>Mandatory</td>
 *   <td>PSU's account number.</td>
 * </tr>
 * <tr>
 *   <td>payee</td>
 *   <td>Max70Text</td>
 *   <td>Optional</td>
 *   <td>The merchant where the card is accepted as an information to the PSU.</td>
 * </tr>
 * <tr>
 *   <td>instructedAmount</td>
 *   <td>Amount</td>
 *   <td>Mandatory</td>
 *   <td>Transaction amount to be checked within the funds check mechanism.</td>
 * </tr>
 * </table>
 *
**/
var ConfirmationOfFunds = /** @class */ (function (_super) {
    __extends(ConfirmationOfFunds, _super);
    function ConfirmationOfFunds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", AccountReference16Ch)
    ], ConfirmationOfFunds.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardNumber" }),
        __metadata("design:type", String)
    ], ConfirmationOfFunds.prototype, "cardNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructedAmount" }),
        __metadata("design:type", Amount)
    ], ConfirmationOfFunds.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee" }),
        __metadata("design:type", String)
    ], ConfirmationOfFunds.prototype, "payee", void 0);
    return ConfirmationOfFunds;
}(SpeakeasyBase));
export { ConfirmationOfFunds };
