import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountsAccountSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountSummary200ApplicationJsonInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountReady" })
  accountReady?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=Cushion" })
  cushion?: string;

  @SpeakeasyMetadata({ data: "json, name=DayTradesRemaining" })
  dayTradesRemaining?: string;

  @SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT" })
  dayTradesRemainingT?: string;

  @SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT+2" })
  dayTradesRemainingTPlus2?: string;

  @SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT+3" })
  dayTradesRemainingTPlus3?: string;

  @SpeakeasyMetadata({ data: "json, name=DayTradesRemainingT+4" })
  dayTradesRemainingTPlus4?: string;

  @SpeakeasyMetadata({ data: "json, name=HighestSeverity" })
  highestSeverity?: string;

  @SpeakeasyMetadata({ data: "json, name=Leverage-S" })
  leverageS?: string;

  @SpeakeasyMetadata({ data: "json, name=LookAheadNextChange" })
  lookAheadNextChange?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentTitle-C" })
  segmentTitleC?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentTitle-S" })
  segmentTitleS?: string;

  @SpeakeasyMetadata({ data: "json, name=TradingType-S" })
  tradingTypeS?: string;

  @SpeakeasyMetadata({ data: "json, name=WhatIfPMEnabled" })
  whatIfPmEnabled?: string;
}


export class GetAccountsAccountSummary200ApplicationJsonLedger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CashBalance" })
  cashBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=CashBalanceFXSegment" })
  cashBalanceFxSegment?: number;

  @SpeakeasyMetadata({ data: "json, name=CashCumQty" })
  cashCumQty?: number;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=FutureOptionMarketValue" })
  futureOptionMarketValue?: number;

  @SpeakeasyMetadata({ data: "json, name=FuturePNL" })
  futurePnl?: number;

  @SpeakeasyMetadata({ data: "json, name=NetDividend" })
  netDividend?: number;

  @SpeakeasyMetadata({ data: "json, name=NetInterest" })
  netInterest?: number;

  @SpeakeasyMetadata({ data: "json, name=NetLiquidation" })
  netLiquidation?: number;

  @SpeakeasyMetadata({ data: "json, name=OptionMarketValue" })
  optionMarketValue?: number;

  @SpeakeasyMetadata({ data: "json, name=RealizedPNL" })
  realizedPnl?: number;

  @SpeakeasyMetadata({ data: "json, name=StockMarketValue" })
  stockMarketValue?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCashBalance" })
  totalCashBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=UnrealizedPNL" })
  unrealizedPnl?: number;
}


export class GetAccountsAccountSummary200ApplicationJsonSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccruedCash" })
  accruedCash?: number;

  @SpeakeasyMetadata({ data: "json, name=AccruedCash-C" })
  accruedCashC?: number;

  @SpeakeasyMetadata({ data: "json, name=AccruedCash-S" })
  accruedCashS?: number;

  @SpeakeasyMetadata({ data: "json, name=AccruedDividend" })
  accruedDividend?: number;

  @SpeakeasyMetadata({ data: "json, name=AccruedDividend-C" })
  accruedDividendC?: number;

  @SpeakeasyMetadata({ data: "json, name=AccruedDividend-S" })
  accruedDividendS?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailableFunds" })
  availableFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailableFunds-C" })
  availableFundsC?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailableFunds-S" })
  availableFundsS?: number;

  @SpeakeasyMetadata({ data: "json, name=Billable" })
  billable?: number;

  @SpeakeasyMetadata({ data: "json, name=Billable-C" })
  billableC?: number;

  @SpeakeasyMetadata({ data: "json, name=Billable-S" })
  billableS?: number;

  @SpeakeasyMetadata({ data: "json, name=BuyingPower" })
  buyingPower?: number;

  @SpeakeasyMetadata({ data: "json, name=EquityWithLoanValue" })
  equityWithLoanValue?: number;

  @SpeakeasyMetadata({ data: "json, name=EquityWithLoanValue-C" })
  equityWithLoanValueC?: number;

  @SpeakeasyMetadata({ data: "json, name=EquityWithLoanValue-S" })
  equityWithLoanValueS?: number;

  @SpeakeasyMetadata({ data: "json, name=ExcessLiquidity" })
  excessLiquidity?: number;

  @SpeakeasyMetadata({ data: "json, name=ExcessLiquidity-C" })
  excessLiquidityC?: number;

  @SpeakeasyMetadata({ data: "json, name=ExcessLiquidity-S" })
  excessLiquidityS?: number;

  @SpeakeasyMetadata({ data: "json, name=FullAvailableFunds" })
  fullAvailableFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=FullAvailableFunds-C" })
  fullAvailableFundsC?: number;

  @SpeakeasyMetadata({ data: "json, name=FullAvailableFunds-S" })
  fullAvailableFundsS?: number;

  @SpeakeasyMetadata({ data: "json, name=FullExcessLiquidity" })
  fullExcessLiquidity?: number;

  @SpeakeasyMetadata({ data: "json, name=FullExcessLiquidity-C" })
  fullExcessLiquidityC?: number;

  @SpeakeasyMetadata({ data: "json, name=FullExcessLiquidity-S" })
  fullExcessLiquidityS?: number;

  @SpeakeasyMetadata({ data: "json, name=FullInitMarginReq" })
  fullInitMarginReq?: number;

  @SpeakeasyMetadata({ data: "json, name=FullInitMarginReq-C" })
  fullInitMarginReqC?: number;

  @SpeakeasyMetadata({ data: "json, name=FullInitMarginReq-S" })
  fullInitMarginReqS?: number;

  @SpeakeasyMetadata({ data: "json, name=FullMaintMarginReq" })
  fullMaintMarginReq?: number;

  @SpeakeasyMetadata({ data: "json, name=FullMaintMarginReq-C" })
  fullMaintMarginReqC?: number;

  @SpeakeasyMetadata({ data: "json, name=FullMaintMarginReq-S" })
  fullMaintMarginReqS?: number;

  @SpeakeasyMetadata({ data: "json, name=GrossPositionValue" })
  grossPositionValue?: number;

  @SpeakeasyMetadata({ data: "json, name=GrossPositionValue-C" })
  grossPositionValueC?: number;

  @SpeakeasyMetadata({ data: "json, name=GrossPositionValue-S" })
  grossPositionValueS?: number;

  @SpeakeasyMetadata({ data: "json, name=IndianStockHaircut" })
  indianStockHaircut?: number;

  @SpeakeasyMetadata({ data: "json, name=IndianStockHaircut-C" })
  indianStockHaircutC?: number;

  @SpeakeasyMetadata({ data: "json, name=IndianStockHaircut-S" })
  indianStockHaircutS?: number;

  @SpeakeasyMetadata({ data: "json, name=InitMarginReq" })
  initMarginReq?: number;

  @SpeakeasyMetadata({ data: "json, name=InitMarginReq-C" })
  initMarginReqC?: number;

  @SpeakeasyMetadata({ data: "json, name=InitMarginReq-S" })
  initMarginReqS?: number;

  @SpeakeasyMetadata({ data: "json, name=InsuredDeposit" })
  insuredDeposit?: number;

  @SpeakeasyMetadata({ data: "json, name=InsuredDeposit-C" })
  insuredDepositC?: number;

  @SpeakeasyMetadata({ data: "json, name=InsuredDeposit-S" })
  insuredDepositS?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadAvailableFunds" })
  lookAheadAvailableFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadAvailableFunds-C" })
  lookAheadAvailableFundsC?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadAvailableFunds-S" })
  lookAheadAvailableFundsS?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadExcessLiquidity" })
  lookAheadExcessLiquidity?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadExcessLiquidity-C" })
  lookAheadExcessLiquidityC?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadExcessLiquidity-S" })
  lookAheadExcessLiquidityS?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadInitMarginReq" })
  lookAheadInitMarginReq?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadInitMarginReq-C" })
  lookAheadInitMarginReqC?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadInitMarginReq-S" })
  lookAheadInitMarginReqS?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadMaintMarginReq" })
  lookAheadMaintMarginReq?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadMaintMarginReq-C" })
  lookAheadMaintMarginReqC?: number;

  @SpeakeasyMetadata({ data: "json, name=LookAheadMaintMarginReq-S" })
  lookAheadMaintMarginReqS?: number;

  @SpeakeasyMetadata({ data: "json, name=MaintMarginReq" })
  maintMarginReq?: number;

  @SpeakeasyMetadata({ data: "json, name=MaintMarginReq-C" })
  maintMarginReqC?: number;

  @SpeakeasyMetadata({ data: "json, name=MaintMarginReq-S" })
  maintMarginReqS?: number;

  @SpeakeasyMetadata({ data: "json, name=NetLiquidation" })
  netLiquidation?: number;

  @SpeakeasyMetadata({ data: "json, name=NetLiquidation-C" })
  netLiquidationC?: number;

  @SpeakeasyMetadata({ data: "json, name=NetLiquidation-S" })
  netLiquidationS?: number;

  @SpeakeasyMetadata({ data: "json, name=NetLiquidationUncertainty" })
  netLiquidationUncertainty?: number;

  @SpeakeasyMetadata({ data: "json, name=PASharesValue" })
  paSharesValue?: number;

  @SpeakeasyMetadata({ data: "json, name=PASharesValue-C" })
  paSharesValueC?: number;

  @SpeakeasyMetadata({ data: "json, name=PASharesValue-S" })
  paSharesValueS?: number;

  @SpeakeasyMetadata({ data: "json, name=PostExpirationExcess" })
  postExpirationExcess?: number;

  @SpeakeasyMetadata({ data: "json, name=PostExpirationExcess-C" })
  postExpirationExcessC?: number;

  @SpeakeasyMetadata({ data: "json, name=PostExpirationExcess-S" })
  postExpirationExcessS?: number;

  @SpeakeasyMetadata({ data: "json, name=PostExpirationMargin" })
  postExpirationMargin?: number;

  @SpeakeasyMetadata({ data: "json, name=PostExpirationMargin-C" })
  postExpirationMarginC?: number;

  @SpeakeasyMetadata({ data: "json, name=PostExpirationMargin-S" })
  postExpirationMarginS?: number;

  @SpeakeasyMetadata({ data: "json, name=RegTEquity" })
  regTEquity?: number;

  @SpeakeasyMetadata({ data: "json, name=RegTEquity-S" })
  regTEquityS?: number;

  @SpeakeasyMetadata({ data: "json, name=RegTMargin" })
  regTMargin?: number;

  @SpeakeasyMetadata({ data: "json, name=RegTMargin-S" })
  regTMarginS?: number;

  @SpeakeasyMetadata({ data: "json, name=SMA" })
  sma?: number;

  @SpeakeasyMetadata({ data: "json, name=SMA-S" })
  smaS?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCashValue" })
  totalCashValue?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCashValue-C" })
  totalCashValueC?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCashValue-S" })
  totalCashValueS?: number;
}


export class GetAccountsAccountSummary200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Info" })
  info?: GetAccountsAccountSummary200ApplicationJsonInfo;

  @SpeakeasyMetadata({ data: "json, name=Ledger", elemType: GetAccountsAccountSummary200ApplicationJsonLedger })
  ledger?: GetAccountsAccountSummary200ApplicationJsonLedger[];

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: GetAccountsAccountSummary200ApplicationJsonSummary;
}


export class GetAccountsAccountSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountSummaryPathParams;
}


export class GetAccountsAccountSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccountsAccountSummary200ApplicationJsonObject?: GetAccountsAccountSummary200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
