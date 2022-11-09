import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccountsAccountSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountSummaryPathParams;
}


export class GetAccountsAccountSummary200ApplicationJsonInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=AccountReady" })
  accountReady?: string;

  @Metadata({ data: "json, name=AccountType" })
  accountType?: string;

  @Metadata({ data: "json, name=Cushion" })
  cushion?: string;

  @Metadata({ data: "json, name=DayTradesRemaining" })
  dayTradesRemaining?: string;

  @Metadata({ data: "json, name=DayTradesRemainingT" })
  dayTradesRemainingT?: string;

  @Metadata({ data: "json, name=DayTradesRemainingT+2" })
  dayTradesRemainingTPlus2?: string;

  @Metadata({ data: "json, name=DayTradesRemainingT+3" })
  dayTradesRemainingTPlus3?: string;

  @Metadata({ data: "json, name=DayTradesRemainingT+4" })
  dayTradesRemainingTPlus4?: string;

  @Metadata({ data: "json, name=HighestSeverity" })
  highestSeverity?: string;

  @Metadata({ data: "json, name=Leverage-S" })
  leverageS?: string;

  @Metadata({ data: "json, name=LookAheadNextChange" })
  lookAheadNextChange?: string;

  @Metadata({ data: "json, name=SegmentTitle-C" })
  segmentTitleC?: string;

  @Metadata({ data: "json, name=SegmentTitle-S" })
  segmentTitleS?: string;

  @Metadata({ data: "json, name=TradingType-S" })
  tradingTypeS?: string;

  @Metadata({ data: "json, name=WhatIfPMEnabled" })
  whatIfPmEnabled?: string;
}


export class GetAccountsAccountSummary200ApplicationJsonLedger extends SpeakeasyBase {
  @Metadata({ data: "json, name=CashBalance" })
  cashBalance?: number;

  @Metadata({ data: "json, name=CashBalanceFXSegment" })
  cashBalanceFxSegment?: number;

  @Metadata({ data: "json, name=CashCumQty" })
  cashCumQty?: number;

  @Metadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @Metadata({ data: "json, name=FutureOptionMarketValue" })
  futureOptionMarketValue?: number;

  @Metadata({ data: "json, name=FuturePNL" })
  futurePnl?: number;

  @Metadata({ data: "json, name=NetDividend" })
  netDividend?: number;

  @Metadata({ data: "json, name=NetInterest" })
  netInterest?: number;

  @Metadata({ data: "json, name=NetLiquidation" })
  netLiquidation?: number;

  @Metadata({ data: "json, name=OptionMarketValue" })
  optionMarketValue?: number;

  @Metadata({ data: "json, name=RealizedPNL" })
  realizedPnl?: number;

  @Metadata({ data: "json, name=StockMarketValue" })
  stockMarketValue?: number;

  @Metadata({ data: "json, name=TotalCashBalance" })
  totalCashBalance?: number;

  @Metadata({ data: "json, name=UnrealizedPNL" })
  unrealizedPnl?: number;
}


export class GetAccountsAccountSummary200ApplicationJsonSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccruedCash" })
  accruedCash?: number;

  @Metadata({ data: "json, name=AccruedCash-C" })
  accruedCashC?: number;

  @Metadata({ data: "json, name=AccruedCash-S" })
  accruedCashS?: number;

  @Metadata({ data: "json, name=AccruedDividend" })
  accruedDividend?: number;

  @Metadata({ data: "json, name=AccruedDividend-C" })
  accruedDividendC?: number;

  @Metadata({ data: "json, name=AccruedDividend-S" })
  accruedDividendS?: number;

  @Metadata({ data: "json, name=AvailableFunds" })
  availableFunds?: number;

  @Metadata({ data: "json, name=AvailableFunds-C" })
  availableFundsC?: number;

  @Metadata({ data: "json, name=AvailableFunds-S" })
  availableFundsS?: number;

  @Metadata({ data: "json, name=Billable" })
  billable?: number;

  @Metadata({ data: "json, name=Billable-C" })
  billableC?: number;

  @Metadata({ data: "json, name=Billable-S" })
  billableS?: number;

  @Metadata({ data: "json, name=BuyingPower" })
  buyingPower?: number;

  @Metadata({ data: "json, name=EquityWithLoanValue" })
  equityWithLoanValue?: number;

  @Metadata({ data: "json, name=EquityWithLoanValue-C" })
  equityWithLoanValueC?: number;

  @Metadata({ data: "json, name=EquityWithLoanValue-S" })
  equityWithLoanValueS?: number;

  @Metadata({ data: "json, name=ExcessLiquidity" })
  excessLiquidity?: number;

  @Metadata({ data: "json, name=ExcessLiquidity-C" })
  excessLiquidityC?: number;

  @Metadata({ data: "json, name=ExcessLiquidity-S" })
  excessLiquidityS?: number;

  @Metadata({ data: "json, name=FullAvailableFunds" })
  fullAvailableFunds?: number;

  @Metadata({ data: "json, name=FullAvailableFunds-C" })
  fullAvailableFundsC?: number;

  @Metadata({ data: "json, name=FullAvailableFunds-S" })
  fullAvailableFundsS?: number;

  @Metadata({ data: "json, name=FullExcessLiquidity" })
  fullExcessLiquidity?: number;

  @Metadata({ data: "json, name=FullExcessLiquidity-C" })
  fullExcessLiquidityC?: number;

  @Metadata({ data: "json, name=FullExcessLiquidity-S" })
  fullExcessLiquidityS?: number;

  @Metadata({ data: "json, name=FullInitMarginReq" })
  fullInitMarginReq?: number;

  @Metadata({ data: "json, name=FullInitMarginReq-C" })
  fullInitMarginReqC?: number;

  @Metadata({ data: "json, name=FullInitMarginReq-S" })
  fullInitMarginReqS?: number;

  @Metadata({ data: "json, name=FullMaintMarginReq" })
  fullMaintMarginReq?: number;

  @Metadata({ data: "json, name=FullMaintMarginReq-C" })
  fullMaintMarginReqC?: number;

  @Metadata({ data: "json, name=FullMaintMarginReq-S" })
  fullMaintMarginReqS?: number;

  @Metadata({ data: "json, name=GrossPositionValue" })
  grossPositionValue?: number;

  @Metadata({ data: "json, name=GrossPositionValue-C" })
  grossPositionValueC?: number;

  @Metadata({ data: "json, name=GrossPositionValue-S" })
  grossPositionValueS?: number;

  @Metadata({ data: "json, name=IndianStockHaircut" })
  indianStockHaircut?: number;

  @Metadata({ data: "json, name=IndianStockHaircut-C" })
  indianStockHaircutC?: number;

  @Metadata({ data: "json, name=IndianStockHaircut-S" })
  indianStockHaircutS?: number;

  @Metadata({ data: "json, name=InitMarginReq" })
  initMarginReq?: number;

  @Metadata({ data: "json, name=InitMarginReq-C" })
  initMarginReqC?: number;

  @Metadata({ data: "json, name=InitMarginReq-S" })
  initMarginReqS?: number;

  @Metadata({ data: "json, name=InsuredDeposit" })
  insuredDeposit?: number;

  @Metadata({ data: "json, name=InsuredDeposit-C" })
  insuredDepositC?: number;

  @Metadata({ data: "json, name=InsuredDeposit-S" })
  insuredDepositS?: number;

  @Metadata({ data: "json, name=LookAheadAvailableFunds" })
  lookAheadAvailableFunds?: number;

  @Metadata({ data: "json, name=LookAheadAvailableFunds-C" })
  lookAheadAvailableFundsC?: number;

  @Metadata({ data: "json, name=LookAheadAvailableFunds-S" })
  lookAheadAvailableFundsS?: number;

  @Metadata({ data: "json, name=LookAheadExcessLiquidity" })
  lookAheadExcessLiquidity?: number;

  @Metadata({ data: "json, name=LookAheadExcessLiquidity-C" })
  lookAheadExcessLiquidityC?: number;

  @Metadata({ data: "json, name=LookAheadExcessLiquidity-S" })
  lookAheadExcessLiquidityS?: number;

  @Metadata({ data: "json, name=LookAheadInitMarginReq" })
  lookAheadInitMarginReq?: number;

  @Metadata({ data: "json, name=LookAheadInitMarginReq-C" })
  lookAheadInitMarginReqC?: number;

  @Metadata({ data: "json, name=LookAheadInitMarginReq-S" })
  lookAheadInitMarginReqS?: number;

  @Metadata({ data: "json, name=LookAheadMaintMarginReq" })
  lookAheadMaintMarginReq?: number;

  @Metadata({ data: "json, name=LookAheadMaintMarginReq-C" })
  lookAheadMaintMarginReqC?: number;

  @Metadata({ data: "json, name=LookAheadMaintMarginReq-S" })
  lookAheadMaintMarginReqS?: number;

  @Metadata({ data: "json, name=MaintMarginReq" })
  maintMarginReq?: number;

  @Metadata({ data: "json, name=MaintMarginReq-C" })
  maintMarginReqC?: number;

  @Metadata({ data: "json, name=MaintMarginReq-S" })
  maintMarginReqS?: number;

  @Metadata({ data: "json, name=NetLiquidation" })
  netLiquidation?: number;

  @Metadata({ data: "json, name=NetLiquidation-C" })
  netLiquidationC?: number;

  @Metadata({ data: "json, name=NetLiquidation-S" })
  netLiquidationS?: number;

  @Metadata({ data: "json, name=NetLiquidationUncertainty" })
  netLiquidationUncertainty?: number;

  @Metadata({ data: "json, name=PASharesValue" })
  paSharesValue?: number;

  @Metadata({ data: "json, name=PASharesValue-C" })
  paSharesValueC?: number;

  @Metadata({ data: "json, name=PASharesValue-S" })
  paSharesValueS?: number;

  @Metadata({ data: "json, name=PostExpirationExcess" })
  postExpirationExcess?: number;

  @Metadata({ data: "json, name=PostExpirationExcess-C" })
  postExpirationExcessC?: number;

  @Metadata({ data: "json, name=PostExpirationExcess-S" })
  postExpirationExcessS?: number;

  @Metadata({ data: "json, name=PostExpirationMargin" })
  postExpirationMargin?: number;

  @Metadata({ data: "json, name=PostExpirationMargin-C" })
  postExpirationMarginC?: number;

  @Metadata({ data: "json, name=PostExpirationMargin-S" })
  postExpirationMarginS?: number;

  @Metadata({ data: "json, name=RegTEquity" })
  regTEquity?: number;

  @Metadata({ data: "json, name=RegTEquity-S" })
  regTEquityS?: number;

  @Metadata({ data: "json, name=RegTMargin" })
  regTMargin?: number;

  @Metadata({ data: "json, name=RegTMargin-S" })
  regTMarginS?: number;

  @Metadata({ data: "json, name=SMA" })
  sma?: number;

  @Metadata({ data: "json, name=SMA-S" })
  smaS?: number;

  @Metadata({ data: "json, name=TotalCashValue" })
  totalCashValue?: number;

  @Metadata({ data: "json, name=TotalCashValue-C" })
  totalCashValueC?: number;

  @Metadata({ data: "json, name=TotalCashValue-S" })
  totalCashValueS?: number;
}


export class GetAccountsAccountSummary200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Info" })
  info?: GetAccountsAccountSummary200ApplicationJsonInfo;

  @Metadata({ data: "json, name=Ledger", elemType: operations.GetAccountsAccountSummary200ApplicationJsonLedger })
  ledger?: GetAccountsAccountSummary200ApplicationJsonLedger[];

  @Metadata({ data: "json, name=Summary" })
  summary?: GetAccountsAccountSummary200ApplicationJsonSummary;
}


export class GetAccountsAccountSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAccountsAccountSummary200ApplicationJsonObject?: GetAccountsAccountSummary200ApplicationJson;

  @Metadata()
  statusCode: number;
}
