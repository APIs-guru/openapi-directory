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
// ObFundsConfirmation1DataInstructedAmount
/**
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
var ObFundsConfirmation1DataInstructedAmount = /** @class */ (function (_super) {
    __extends(ObFundsConfirmation1DataInstructedAmount, _super);
    function ObFundsConfirmation1DataInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObFundsConfirmation1DataInstructedAmount.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObFundsConfirmation1DataInstructedAmount.prototype, "currency", void 0);
    return ObFundsConfirmation1DataInstructedAmount;
}(SpeakeasyBase));
export { ObFundsConfirmation1DataInstructedAmount };
var ObFundsConfirmation1Data = /** @class */ (function (_super) {
    __extends(ObFundsConfirmation1Data, _super);
    function ObFundsConfirmation1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObFundsConfirmation1Data.prototype, "consentId", void 0);
    __decorate([
        Metadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObFundsConfirmation1DataInstructedAmount)
    ], ObFundsConfirmation1Data.prototype, "instructedAmount", void 0);
    __decorate([
        Metadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObFundsConfirmation1Data.prototype, "reference", void 0);
    return ObFundsConfirmation1Data;
}(SpeakeasyBase));
export { ObFundsConfirmation1Data };
var ObFundsConfirmation1 = /** @class */ (function (_super) {
    __extends(ObFundsConfirmation1, _super);
    function ObFundsConfirmation1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Data" }),
        __metadata("design:type", ObFundsConfirmation1Data)
    ], ObFundsConfirmation1.prototype, "data", void 0);
    return ObFundsConfirmation1;
}(SpeakeasyBase));
export { ObFundsConfirmation1 };
