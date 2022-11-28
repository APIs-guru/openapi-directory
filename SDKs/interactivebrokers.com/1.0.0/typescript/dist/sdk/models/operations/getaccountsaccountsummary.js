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
var GetAccountsAccountSummaryPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummaryPathParams, _super);
    function GetAccountsAccountSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummaryPathParams.prototype, "account", void 0);
    return GetAccountsAccountSummaryPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountSummaryPathParams };
var GetAccountsAccountSummary200ApplicationJsonInfo = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummary200ApplicationJsonInfo, _super);
    function GetAccountsAccountSummary200ApplicationJsonInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountCode" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "accountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountReady" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "accountReady", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountType" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cushion" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "cushion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayTradesRemaining" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "dayTradesRemaining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "dayTradesRemainingT", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT+2" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "dayTradesRemainingTPlus2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT+3" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "dayTradesRemainingTPlus3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT+4" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "dayTradesRemainingTPlus4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HighestSeverity" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "highestSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Leverage-S" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "leverageS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadNextChange" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "lookAheadNextChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentTitle-C" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "segmentTitleC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentTitle-S" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "segmentTitleS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TradingType-S" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "tradingTypeS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhatIfPMEnabled" }),
        __metadata("design:type", String)
    ], GetAccountsAccountSummary200ApplicationJsonInfo.prototype, "whatIfPmEnabled", void 0);
    return GetAccountsAccountSummary200ApplicationJsonInfo;
}(SpeakeasyBase));
export { GetAccountsAccountSummary200ApplicationJsonInfo };
var GetAccountsAccountSummary200ApplicationJsonLedger = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummary200ApplicationJsonLedger, _super);
    function GetAccountsAccountSummary200ApplicationJsonLedger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CashBalance" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "cashBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CashBalanceFXSegment" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "cashBalanceFxSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CashCumQty" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "cashCumQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FutureOptionMarketValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "futureOptionMarketValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FuturePNL" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "futurePnl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetDividend" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "netDividend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetInterest" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "netInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetLiquidation" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "netLiquidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptionMarketValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "optionMarketValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RealizedPNL" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "realizedPnl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StockMarketValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "stockMarketValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCashBalance" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "totalCashBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnrealizedPNL" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonLedger.prototype, "unrealizedPnl", void 0);
    return GetAccountsAccountSummary200ApplicationJsonLedger;
}(SpeakeasyBase));
export { GetAccountsAccountSummary200ApplicationJsonLedger };
var GetAccountsAccountSummary200ApplicationJsonSummary = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummary200ApplicationJsonSummary, _super);
    function GetAccountsAccountSummary200ApplicationJsonSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccruedCash" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "accruedCash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccruedCash-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "accruedCashC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccruedCash-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "accruedCashS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccruedDividend" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "accruedDividend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccruedDividend-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "accruedDividendC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccruedDividend-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "accruedDividendS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailableFunds" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "availableFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailableFunds-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "availableFundsC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailableFunds-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "availableFundsS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Billable" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "billable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Billable-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "billableC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Billable-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "billableS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuyingPower" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "buyingPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EquityWithLoanValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "equityWithLoanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EquityWithLoanValue-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "equityWithLoanValueC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EquityWithLoanValue-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "equityWithLoanValueS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExcessLiquidity" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "excessLiquidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExcessLiquidity-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "excessLiquidityC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExcessLiquidity-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "excessLiquidityS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullAvailableFunds" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullAvailableFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullAvailableFunds-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullAvailableFundsC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullAvailableFunds-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullAvailableFundsS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullExcessLiquidity" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullExcessLiquidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullExcessLiquidity-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullExcessLiquidityC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullExcessLiquidity-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullExcessLiquidityS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullInitMarginReq" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullInitMarginReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullInitMarginReq-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullInitMarginReqC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullInitMarginReq-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullInitMarginReqS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullMaintMarginReq" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullMaintMarginReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullMaintMarginReq-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullMaintMarginReqC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullMaintMarginReq-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "fullMaintMarginReqS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GrossPositionValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "grossPositionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GrossPositionValue-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "grossPositionValueC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GrossPositionValue-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "grossPositionValueS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndianStockHaircut" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "indianStockHaircut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndianStockHaircut-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "indianStockHaircutC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndianStockHaircut-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "indianStockHaircutS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitMarginReq" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "initMarginReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitMarginReq-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "initMarginReqC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitMarginReq-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "initMarginReqS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsuredDeposit" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "insuredDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsuredDeposit-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "insuredDepositC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsuredDeposit-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "insuredDepositS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadAvailableFunds" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadAvailableFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadAvailableFunds-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadAvailableFundsC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadAvailableFunds-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadAvailableFundsS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadExcessLiquidity" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadExcessLiquidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadExcessLiquidity-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadExcessLiquidityC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadExcessLiquidity-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadExcessLiquidityS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadInitMarginReq" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadInitMarginReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadInitMarginReq-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadInitMarginReqC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadInitMarginReq-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadInitMarginReqS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadMaintMarginReq" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadMaintMarginReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadMaintMarginReq-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadMaintMarginReqC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookAheadMaintMarginReq-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "lookAheadMaintMarginReqS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintMarginReq" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "maintMarginReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintMarginReq-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "maintMarginReqC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintMarginReq-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "maintMarginReqS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetLiquidation" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "netLiquidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetLiquidation-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "netLiquidationC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetLiquidation-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "netLiquidationS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetLiquidationUncertainty" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "netLiquidationUncertainty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PASharesValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "paSharesValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PASharesValue-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "paSharesValueC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PASharesValue-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "paSharesValueS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostExpirationExcess" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "postExpirationExcess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostExpirationExcess-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "postExpirationExcessC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostExpirationExcess-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "postExpirationExcessS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostExpirationMargin" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "postExpirationMargin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostExpirationMargin-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "postExpirationMarginC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostExpirationMargin-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "postExpirationMarginS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegTEquity" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "regTEquity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegTEquity-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "regTEquityS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegTMargin" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "regTMargin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegTMargin-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "regTMarginS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SMA" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "sma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SMA-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "smaS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCashValue" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "totalCashValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCashValue-C" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "totalCashValueC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCashValue-S" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummary200ApplicationJsonSummary.prototype, "totalCashValueS", void 0);
    return GetAccountsAccountSummary200ApplicationJsonSummary;
}(SpeakeasyBase));
export { GetAccountsAccountSummary200ApplicationJsonSummary };
var GetAccountsAccountSummary200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummary200ApplicationJson, _super);
    function GetAccountsAccountSummary200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Info" }),
        __metadata("design:type", GetAccountsAccountSummary200ApplicationJsonInfo)
    ], GetAccountsAccountSummary200ApplicationJson.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ledger", elemType: GetAccountsAccountSummary200ApplicationJsonLedger }),
        __metadata("design:type", Array)
    ], GetAccountsAccountSummary200ApplicationJson.prototype, "ledger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", GetAccountsAccountSummary200ApplicationJsonSummary)
    ], GetAccountsAccountSummary200ApplicationJson.prototype, "summary", void 0);
    return GetAccountsAccountSummary200ApplicationJson;
}(SpeakeasyBase));
export { GetAccountsAccountSummary200ApplicationJson };
var GetAccountsAccountSummaryRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummaryRequest, _super);
    function GetAccountsAccountSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountSummaryPathParams)
    ], GetAccountsAccountSummaryRequest.prototype, "pathParams", void 0);
    return GetAccountsAccountSummaryRequest;
}(SpeakeasyBase));
export { GetAccountsAccountSummaryRequest };
var GetAccountsAccountSummaryResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountSummaryResponse, _super);
    function GetAccountsAccountSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountSummary200ApplicationJson)
    ], GetAccountsAccountSummaryResponse.prototype, "getAccountsAccountSummary200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountSummaryResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountSummaryResponse;
}(SpeakeasyBase));
export { GetAccountsAccountSummaryResponse };
