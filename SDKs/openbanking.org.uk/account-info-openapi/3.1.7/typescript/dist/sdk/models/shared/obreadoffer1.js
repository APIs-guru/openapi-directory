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
// ObReadOffer1DataOfferAmount
/**
 * Amount of money associated with the offer type.
**/
var ObReadOffer1DataOfferAmount = /** @class */ (function (_super) {
    __extends(ObReadOffer1DataOfferAmount, _super);
    function ObReadOffer1DataOfferAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOfferAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOfferAmount.prototype, "currency", void 0);
    return ObReadOffer1DataOfferAmount;
}(SpeakeasyBase));
export { ObReadOffer1DataOfferAmount };
// ObReadOffer1DataOfferFee
/**
 * Fee associated with the offer type.
**/
var ObReadOffer1DataOfferFee = /** @class */ (function (_super) {
    __extends(ObReadOffer1DataOfferFee, _super);
    function ObReadOffer1DataOfferFee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOfferFee.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOfferFee.prototype, "currency", void 0);
    return ObReadOffer1DataOfferFee;
}(SpeakeasyBase));
export { ObReadOffer1DataOfferFee };
export var ObReadOffer1DataOfferOfferTypeEnum;
(function (ObReadOffer1DataOfferOfferTypeEnum) {
    ObReadOffer1DataOfferOfferTypeEnum["BalanceTransfer"] = "BalanceTransfer";
    ObReadOffer1DataOfferOfferTypeEnum["LimitIncrease"] = "LimitIncrease";
    ObReadOffer1DataOfferOfferTypeEnum["MoneyTransfer"] = "MoneyTransfer";
    ObReadOffer1DataOfferOfferTypeEnum["Other"] = "Other";
    ObReadOffer1DataOfferOfferTypeEnum["PromotionalRate"] = "PromotionalRate";
})(ObReadOffer1DataOfferOfferTypeEnum || (ObReadOffer1DataOfferOfferTypeEnum = {}));
var ObReadOffer1DataOffer = /** @class */ (function (_super) {
    __extends(ObReadOffer1DataOffer, _super);
    function ObReadOffer1DataOffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObReadOffer1DataOfferAmount)
    ], ObReadOffer1DataOffer.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDateTime" }),
        __metadata("design:type", Date)
    ], ObReadOffer1DataOffer.prototype, "endDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fee" }),
        __metadata("design:type", ObReadOffer1DataOfferFee)
    ], ObReadOffer1DataOffer.prototype, "fee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfferId" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfferType" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "offerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDateTime" }),
        __metadata("design:type", Date)
    ], ObReadOffer1DataOffer.prototype, "startDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Term" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "term", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=URL" }),
        __metadata("design:type", String)
    ], ObReadOffer1DataOffer.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], ObReadOffer1DataOffer.prototype, "value", void 0);
    return ObReadOffer1DataOffer;
}(SpeakeasyBase));
export { ObReadOffer1DataOffer };
var ObReadOffer1Data = /** @class */ (function (_super) {
    __extends(ObReadOffer1Data, _super);
    function ObReadOffer1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Offer", elemType: ObReadOffer1DataOffer }),
        __metadata("design:type", Array)
    ], ObReadOffer1Data.prototype, "offer", void 0);
    return ObReadOffer1Data;
}(SpeakeasyBase));
export { ObReadOffer1Data };
var ObReadOffer1 = /** @class */ (function (_super) {
    __extends(ObReadOffer1, _super);
    function ObReadOffer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObReadOffer1Data)
    ], ObReadOffer1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObReadOffer1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObReadOffer1.prototype, "meta", void 0);
    return ObReadOffer1;
}(SpeakeasyBase));
export { ObReadOffer1 };
