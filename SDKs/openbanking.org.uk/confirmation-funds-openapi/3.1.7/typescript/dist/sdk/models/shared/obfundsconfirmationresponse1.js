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
import { Links } from "./links";
import { Meta } from "./meta";
// ObFundsConfirmationResponse1DataInstructedAmount
/**
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
var ObFundsConfirmationResponse1DataInstructedAmount = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationResponse1DataInstructedAmount, _super);
    function ObFundsConfirmationResponse1DataInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationResponse1DataInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationResponse1DataInstructedAmount.prototype, "currency", void 0);
    return ObFundsConfirmationResponse1DataInstructedAmount;
}(SpeakeasyBase));
export { ObFundsConfirmationResponse1DataInstructedAmount };
var ObFundsConfirmationResponse1Data = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationResponse1Data, _super);
    function ObFundsConfirmationResponse1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationResponse1Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObFundsConfirmationResponse1Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FundsAvailable" }),
        __metadata("design:type", Boolean)
    ], ObFundsConfirmationResponse1Data.prototype, "fundsAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FundsConfirmationId" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationResponse1Data.prototype, "fundsConfirmationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObFundsConfirmationResponse1DataInstructedAmount)
    ], ObFundsConfirmationResponse1Data.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationResponse1Data.prototype, "reference", void 0);
    return ObFundsConfirmationResponse1Data;
}(SpeakeasyBase));
export { ObFundsConfirmationResponse1Data };
var ObFundsConfirmationResponse1 = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationResponse1, _super);
    function ObFundsConfirmationResponse1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObFundsConfirmationResponse1Data)
    ], ObFundsConfirmationResponse1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObFundsConfirmationResponse1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObFundsConfirmationResponse1.prototype, "meta", void 0);
    return ObFundsConfirmationResponse1;
}(SpeakeasyBase));
export { ObFundsConfirmationResponse1 };
