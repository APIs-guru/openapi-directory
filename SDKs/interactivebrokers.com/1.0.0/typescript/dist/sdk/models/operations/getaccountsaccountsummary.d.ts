import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountsAccountSummaryPathParams extends SpeakeasyBase {
    account: string;
}
export declare class GetAccountsAccountSummary200ApplicationJsonInfo extends SpeakeasyBase {
    accountCode?: string;
    accountReady?: string;
    accountType?: string;
    cushion?: string;
    dayTradesRemaining?: string;
    dayTradesRemainingT?: string;
    dayTradesRemainingTPlus2?: string;
    dayTradesRemainingTPlus3?: string;
    dayTradesRemainingTPlus4?: string;
    highestSeverity?: string;
    leverageS?: string;
    lookAheadNextChange?: string;
    segmentTitleC?: string;
    segmentTitleS?: string;
    tradingTypeS?: string;
    whatIfPmEnabled?: string;
}
export declare class GetAccountsAccountSummary200ApplicationJsonLedger extends SpeakeasyBase {
    cashBalance?: number;
    cashBalanceFxSegment?: number;
    cashCumQty?: number;
    exchangeRate?: number;
    futureOptionMarketValue?: number;
    futurePnl?: number;
    netDividend?: number;
    netInterest?: number;
    netLiquidation?: number;
    optionMarketValue?: number;
    realizedPnl?: number;
    stockMarketValue?: number;
    totalCashBalance?: number;
    unrealizedPnl?: number;
}
export declare class GetAccountsAccountSummary200ApplicationJsonSummary extends SpeakeasyBase {
    accruedCash?: number;
    accruedCashC?: number;
    accruedCashS?: number;
    accruedDividend?: number;
    accruedDividendC?: number;
    accruedDividendS?: number;
    availableFunds?: number;
    availableFundsC?: number;
    availableFundsS?: number;
    billable?: number;
    billableC?: number;
    billableS?: number;
    buyingPower?: number;
    equityWithLoanValue?: number;
    equityWithLoanValueC?: number;
    equityWithLoanValueS?: number;
    excessLiquidity?: number;
    excessLiquidityC?: number;
    excessLiquidityS?: number;
    fullAvailableFunds?: number;
    fullAvailableFundsC?: number;
    fullAvailableFundsS?: number;
    fullExcessLiquidity?: number;
    fullExcessLiquidityC?: number;
    fullExcessLiquidityS?: number;
    fullInitMarginReq?: number;
    fullInitMarginReqC?: number;
    fullInitMarginReqS?: number;
    fullMaintMarginReq?: number;
    fullMaintMarginReqC?: number;
    fullMaintMarginReqS?: number;
    grossPositionValue?: number;
    grossPositionValueC?: number;
    grossPositionValueS?: number;
    indianStockHaircut?: number;
    indianStockHaircutC?: number;
    indianStockHaircutS?: number;
    initMarginReq?: number;
    initMarginReqC?: number;
    initMarginReqS?: number;
    insuredDeposit?: number;
    insuredDepositC?: number;
    insuredDepositS?: number;
    lookAheadAvailableFunds?: number;
    lookAheadAvailableFundsC?: number;
    lookAheadAvailableFundsS?: number;
    lookAheadExcessLiquidity?: number;
    lookAheadExcessLiquidityC?: number;
    lookAheadExcessLiquidityS?: number;
    lookAheadInitMarginReq?: number;
    lookAheadInitMarginReqC?: number;
    lookAheadInitMarginReqS?: number;
    lookAheadMaintMarginReq?: number;
    lookAheadMaintMarginReqC?: number;
    lookAheadMaintMarginReqS?: number;
    maintMarginReq?: number;
    maintMarginReqC?: number;
    maintMarginReqS?: number;
    netLiquidation?: number;
    netLiquidationC?: number;
    netLiquidationS?: number;
    netLiquidationUncertainty?: number;
    paSharesValue?: number;
    paSharesValueC?: number;
    paSharesValueS?: number;
    postExpirationExcess?: number;
    postExpirationExcessC?: number;
    postExpirationExcessS?: number;
    postExpirationMargin?: number;
    postExpirationMarginC?: number;
    postExpirationMarginS?: number;
    regTEquity?: number;
    regTEquityS?: number;
    regTMargin?: number;
    regTMarginS?: number;
    sma?: number;
    smaS?: number;
    totalCashValue?: number;
    totalCashValueC?: number;
    totalCashValueS?: number;
}
export declare class GetAccountsAccountSummary200ApplicationJson extends SpeakeasyBase {
    info?: GetAccountsAccountSummary200ApplicationJsonInfo;
    ledger?: GetAccountsAccountSummary200ApplicationJsonLedger[];
    summary?: GetAccountsAccountSummary200ApplicationJsonSummary;
}
export declare class GetAccountsAccountSummaryRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountSummaryPathParams;
}
export declare class GetAccountsAccountSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getAccountsAccountSummary200ApplicationJsonObject?: GetAccountsAccountSummary200ApplicationJson;
    statusCode: number;
}
