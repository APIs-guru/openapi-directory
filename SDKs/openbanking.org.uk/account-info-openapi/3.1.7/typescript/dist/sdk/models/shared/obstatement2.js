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
import { ObActiveOrHistoricCurrencyAndAmount8 } from "./obactiveorhistoriccurrencyandamount8";
import { ObCreditDebitCode0Enum } from "./obcreditdebitcode0enum";
import { ObActiveOrHistoricCurrencyAndAmount5 } from "./obactiveorhistoriccurrencyandamount5";
import { ObActiveOrHistoricCurrencyAndAmount6 } from "./obactiveorhistoriccurrencyandamount6";
import { ObActiveOrHistoricCurrencyAndAmount7 } from "./obactiveorhistoriccurrencyandamount7";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";
// ObStatement2StatementAmount
/**
 * Set of elements used to provide details of a generic amount for the statement resource.
**/
var ObStatement2StatementAmount = /** @class */ (function (_super) {
    __extends(ObStatement2StatementAmount, _super);
    function ObStatement2StatementAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount8)
    ], ObStatement2StatementAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" }),
        __metadata("design:type", String)
    ], ObStatement2StatementAmount.prototype, "creditDebitIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementAmount.prototype, "type", void 0);
    return ObStatement2StatementAmount;
}(SpeakeasyBase));
export { ObStatement2StatementAmount };
// ObStatement2StatementBenefit
/**
 * Set of elements used to provide details of a benefit or reward amount for the statement resource.
**/
var ObStatement2StatementBenefit = /** @class */ (function (_super) {
    __extends(ObStatement2StatementBenefit, _super);
    function ObStatement2StatementBenefit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount5)
    ], ObStatement2StatementBenefit.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementBenefit.prototype, "type", void 0);
    return ObStatement2StatementBenefit;
}(SpeakeasyBase));
export { ObStatement2StatementBenefit };
// ObStatement2StatementDateTime
/**
 * Set of elements used to provide details of a generic date time for the statement resource.
**/
var ObStatement2StatementDateTime = /** @class */ (function (_super) {
    __extends(ObStatement2StatementDateTime, _super);
    function ObStatement2StatementDateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateTime" }),
        __metadata("design:type", Date)
    ], ObStatement2StatementDateTime.prototype, "dateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementDateTime.prototype, "type", void 0);
    return ObStatement2StatementDateTime;
}(SpeakeasyBase));
export { ObStatement2StatementDateTime };
// ObStatement2StatementFee
/**
 * Set of elements used to provide details of a fee for the statement resource.
**/
var ObStatement2StatementFee = /** @class */ (function (_super) {
    __extends(ObStatement2StatementFee, _super);
    function ObStatement2StatementFee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount6)
    ], ObStatement2StatementFee.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" }),
        __metadata("design:type", String)
    ], ObStatement2StatementFee.prototype, "creditDebitIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObStatement2StatementFee.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObStatement2StatementFee.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", Number)
    ], ObStatement2StatementFee.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObStatement2StatementFee.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementFee.prototype, "type", void 0);
    return ObStatement2StatementFee;
}(SpeakeasyBase));
export { ObStatement2StatementFee };
// ObStatement2StatementInterest
/**
 * Set of elements used to provide details of a generic interest amount related to the statement resource.
**/
var ObStatement2StatementInterest = /** @class */ (function (_super) {
    __extends(ObStatement2StatementInterest, _super);
    function ObStatement2StatementInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount7)
    ], ObStatement2StatementInterest.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" }),
        __metadata("design:type", String)
    ], ObStatement2StatementInterest.prototype, "creditDebitIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObStatement2StatementInterest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObStatement2StatementInterest.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", Number)
    ], ObStatement2StatementInterest.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObStatement2StatementInterest.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementInterest.prototype, "type", void 0);
    return ObStatement2StatementInterest;
}(SpeakeasyBase));
export { ObStatement2StatementInterest };
// ObStatement2StatementRate
/**
 * Set of elements used to provide details of a generic rate related to the statement resource.
**/
var ObStatement2StatementRate = /** @class */ (function (_super) {
    __extends(ObStatement2StatementRate, _super);
    function ObStatement2StatementRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", String)
    ], ObStatement2StatementRate.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementRate.prototype, "type", void 0);
    return ObStatement2StatementRate;
}(SpeakeasyBase));
export { ObStatement2StatementRate };
// ObStatement2StatementValue
/**
 * Set of elements used to provide details of a generic number value related to the statement resource.
**/
var ObStatement2StatementValue = /** @class */ (function (_super) {
    __extends(ObStatement2StatementValue, _super);
    function ObStatement2StatementValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2StatementValue.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", String)
    ], ObStatement2StatementValue.prototype, "value", void 0);
    return ObStatement2StatementValue;
}(SpeakeasyBase));
export { ObStatement2StatementValue };
// ObStatement2
/**
 * Provides further details on a statement resource.
**/
var ObStatement2 = /** @class */ (function (_super) {
    __extends(ObStatement2, _super);
    function ObStatement2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObStatement2.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObStatement2.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDateTime" }),
        __metadata("design:type", Date)
    ], ObStatement2.prototype, "endDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDateTime" }),
        __metadata("design:type", Date)
    ], ObStatement2.prototype, "startDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementAmount", elemType: ObStatement2StatementAmount }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementBenefit", elemType: ObStatement2StatementBenefit }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementBenefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementDateTime", elemType: ObStatement2StatementDateTime }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementDescription" }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementFee", elemType: ObStatement2StatementFee }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementId" }),
        __metadata("design:type", String)
    ], ObStatement2.prototype, "statementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementInterest", elemType: ObStatement2StatementInterest }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementRate", elemType: ObStatement2StatementRate }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementReference" }),
        __metadata("design:type", String)
    ], ObStatement2.prototype, "statementReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementValue", elemType: ObStatement2StatementValue }),
        __metadata("design:type", Array)
    ], ObStatement2.prototype, "statementValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObStatement2.prototype, "type", void 0);
    return ObStatement2;
}(SpeakeasyBase));
export { ObStatement2 };
