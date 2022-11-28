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
import { ObCreditDebitCode2Enum } from "./obcreditdebitcode2enum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
import { Links } from "./links";
import { Meta } from "./meta";
// ObReadBalance1DataBalanceAmount
/**
 * Amount of money of the cash balance.
**/
var ObReadBalance1DataBalanceAmount = /** @class */ (function (_super) {
    __extends(ObReadBalance1DataBalanceAmount, _super);
    function ObReadBalance1DataBalanceAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalanceAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalanceAmount.prototype, "currency", void 0);
    return ObReadBalance1DataBalanceAmount;
}(SpeakeasyBase));
export { ObReadBalance1DataBalanceAmount };
// ObReadBalance1DataBalanceCreditLineAmount
/**
 * Amount of money of the credit line.
**/
var ObReadBalance1DataBalanceCreditLineAmount = /** @class */ (function (_super) {
    __extends(ObReadBalance1DataBalanceCreditLineAmount, _super);
    function ObReadBalance1DataBalanceCreditLineAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalanceCreditLineAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalanceCreditLineAmount.prototype, "currency", void 0);
    return ObReadBalance1DataBalanceCreditLineAmount;
}(SpeakeasyBase));
export { ObReadBalance1DataBalanceCreditLineAmount };
export var ObReadBalance1DataBalanceCreditLineTypeEnum;
(function (ObReadBalance1DataBalanceCreditLineTypeEnum) {
    ObReadBalance1DataBalanceCreditLineTypeEnum["Available"] = "Available";
    ObReadBalance1DataBalanceCreditLineTypeEnum["Credit"] = "Credit";
    ObReadBalance1DataBalanceCreditLineTypeEnum["Emergency"] = "Emergency";
    ObReadBalance1DataBalanceCreditLineTypeEnum["PreAgreed"] = "Pre-Agreed";
    ObReadBalance1DataBalanceCreditLineTypeEnum["Temporary"] = "Temporary";
})(ObReadBalance1DataBalanceCreditLineTypeEnum || (ObReadBalance1DataBalanceCreditLineTypeEnum = {}));
// ObReadBalance1DataBalanceCreditLine
/**
 * Set of elements used to provide details on the credit line.
**/
var ObReadBalance1DataBalanceCreditLine = /** @class */ (function (_super) {
    __extends(ObReadBalance1DataBalanceCreditLine, _super);
    function ObReadBalance1DataBalanceCreditLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObReadBalance1DataBalanceCreditLineAmount)
    ], ObReadBalance1DataBalanceCreditLine.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Included" }),
        __metadata("design:type", Boolean)
    ], ObReadBalance1DataBalanceCreditLine.prototype, "included", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalanceCreditLine.prototype, "type", void 0);
    return ObReadBalance1DataBalanceCreditLine;
}(SpeakeasyBase));
export { ObReadBalance1DataBalanceCreditLine };
// ObReadBalance1DataBalance
/**
 * Set of elements used to define the balance details.
**/
var ObReadBalance1DataBalance = /** @class */ (function (_super) {
    __extends(ObReadBalance1DataBalance, _super);
    function ObReadBalance1DataBalance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalance.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObReadBalance1DataBalanceAmount)
    ], ObReadBalance1DataBalance.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalance.prototype, "creditDebitIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditLine", elemType: ObReadBalance1DataBalanceCreditLine }),
        __metadata("design:type", Array)
    ], ObReadBalance1DataBalance.prototype, "creditLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateTime" }),
        __metadata("design:type", Date)
    ], ObReadBalance1DataBalance.prototype, "dateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObReadBalance1DataBalance.prototype, "type", void 0);
    return ObReadBalance1DataBalance;
}(SpeakeasyBase));
export { ObReadBalance1DataBalance };
var ObReadBalance1Data = /** @class */ (function (_super) {
    __extends(ObReadBalance1Data, _super);
    function ObReadBalance1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Balance", elemType: ObReadBalance1DataBalance }),
        __metadata("design:type", Array)
    ], ObReadBalance1Data.prototype, "balance", void 0);
    return ObReadBalance1Data;
}(SpeakeasyBase));
export { ObReadBalance1Data };
var ObReadBalance1 = /** @class */ (function (_super) {
    __extends(ObReadBalance1, _super);
    function ObReadBalance1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObReadBalance1Data)
    ], ObReadBalance1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObReadBalance1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObReadBalance1.prototype, "meta", void 0);
    return ObReadBalance1;
}(SpeakeasyBase));
export { ObReadBalance1 };
