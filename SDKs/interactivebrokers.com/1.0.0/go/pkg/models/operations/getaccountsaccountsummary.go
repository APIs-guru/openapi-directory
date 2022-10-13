package operations

type GetAccountsAccountSummaryPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountSummaryRequest struct {
	PathParams GetAccountsAccountSummaryPathParams
}

type GetAccountsAccountSummary200ApplicationJSONInfo struct {
	AccountCode              *string `json:"AccountCode"`
	AccountReady             *string `json:"AccountReady"`
	AccountType              *string `json:"AccountType"`
	Cushion                  *string `json:"Cushion"`
	DayTradesRemaining       *string `json:"DayTradesRemaining"`
	DayTradesRemainingT      *string `json:"DayTradesRemainingT"`
	DayTradesRemainingTPlus2 *string `json:"DayTradesRemainingT+2"`
	DayTradesRemainingTPlus3 *string `json:"DayTradesRemainingT+3"`
	DayTradesRemainingTPlus4 *string `json:"DayTradesRemainingT+4"`
	HighestSeverity          *string `json:"HighestSeverity"`
	LeverageS                *string `json:"Leverage-S"`
	LookAheadNextChange      *string `json:"LookAheadNextChange"`
	SegmentTitleC            *string `json:"SegmentTitle-C"`
	SegmentTitleS            *string `json:"SegmentTitle-S"`
	TradingTypeS             *string `json:"TradingType-S"`
	WhatIfPmEnabled          *string `json:"WhatIfPMEnabled"`
}

type GetAccountsAccountSummary200ApplicationJSONLedger struct {
	CashBalance             *float64 `json:"CashBalance"`
	CashBalanceFxSegment    *float64 `json:"CashBalanceFXSegment"`
	CashCumQty              *float64 `json:"CashCumQty"`
	ExchangeRate            *float64 `json:"ExchangeRate"`
	FutureOptionMarketValue *float64 `json:"FutureOptionMarketValue"`
	FuturePnl               *float64 `json:"FuturePNL"`
	NetDividend             *float64 `json:"NetDividend"`
	NetInterest             *float64 `json:"NetInterest"`
	NetLiquidation          *float64 `json:"NetLiquidation"`
	OptionMarketValue       *float64 `json:"OptionMarketValue"`
	RealizedPnl             *float64 `json:"RealizedPNL"`
	StockMarketValue        *float64 `json:"StockMarketValue"`
	TotalCashBalance        *float64 `json:"TotalCashBalance"`
	UnrealizedPnl           *float64 `json:"UnrealizedPNL"`
}

type GetAccountsAccountSummary200ApplicationJSONSummary struct {
	AccruedCash               *float64 `json:"AccruedCash"`
	AccruedCashC              *float64 `json:"AccruedCash-C"`
	AccruedCashS              *float64 `json:"AccruedCash-S"`
	AccruedDividend           *float64 `json:"AccruedDividend"`
	AccruedDividendC          *float64 `json:"AccruedDividend-C"`
	AccruedDividendS          *float64 `json:"AccruedDividend-S"`
	AvailableFunds            *float64 `json:"AvailableFunds"`
	AvailableFundsC           *float64 `json:"AvailableFunds-C"`
	AvailableFundsS           *float64 `json:"AvailableFunds-S"`
	Billable                  *float64 `json:"Billable"`
	BillableC                 *float64 `json:"Billable-C"`
	BillableS                 *float64 `json:"Billable-S"`
	BuyingPower               *float64 `json:"BuyingPower"`
	EquityWithLoanValue       *float64 `json:"EquityWithLoanValue"`
	EquityWithLoanValueC      *float64 `json:"EquityWithLoanValue-C"`
	EquityWithLoanValueS      *float64 `json:"EquityWithLoanValue-S"`
	ExcessLiquidity           *float64 `json:"ExcessLiquidity"`
	ExcessLiquidityC          *float64 `json:"ExcessLiquidity-C"`
	ExcessLiquidityS          *float64 `json:"ExcessLiquidity-S"`
	FullAvailableFunds        *float64 `json:"FullAvailableFunds"`
	FullAvailableFundsC       *float64 `json:"FullAvailableFunds-C"`
	FullAvailableFundsS       *float64 `json:"FullAvailableFunds-S"`
	FullExcessLiquidity       *float64 `json:"FullExcessLiquidity"`
	FullExcessLiquidityC      *float64 `json:"FullExcessLiquidity-C"`
	FullExcessLiquidityS      *float64 `json:"FullExcessLiquidity-S"`
	FullInitMarginReq         *float64 `json:"FullInitMarginReq"`
	FullInitMarginReqC        *float64 `json:"FullInitMarginReq-C"`
	FullInitMarginReqS        *float64 `json:"FullInitMarginReq-S"`
	FullMaintMarginReq        *float64 `json:"FullMaintMarginReq"`
	FullMaintMarginReqC       *float64 `json:"FullMaintMarginReq-C"`
	FullMaintMarginReqS       *float64 `json:"FullMaintMarginReq-S"`
	GrossPositionValue        *float64 `json:"GrossPositionValue"`
	GrossPositionValueC       *float64 `json:"GrossPositionValue-C"`
	GrossPositionValueS       *float64 `json:"GrossPositionValue-S"`
	IndianStockHaircut        *float64 `json:"IndianStockHaircut"`
	IndianStockHaircutC       *float64 `json:"IndianStockHaircut-C"`
	IndianStockHaircutS       *float64 `json:"IndianStockHaircut-S"`
	InitMarginReq             *float64 `json:"InitMarginReq"`
	InitMarginReqC            *float64 `json:"InitMarginReq-C"`
	InitMarginReqS            *float64 `json:"InitMarginReq-S"`
	InsuredDeposit            *float64 `json:"InsuredDeposit"`
	InsuredDepositC           *float64 `json:"InsuredDeposit-C"`
	InsuredDepositS           *float64 `json:"InsuredDeposit-S"`
	LookAheadAvailableFunds   *float64 `json:"LookAheadAvailableFunds"`
	LookAheadAvailableFundsC  *float64 `json:"LookAheadAvailableFunds-C"`
	LookAheadAvailableFundsS  *float64 `json:"LookAheadAvailableFunds-S"`
	LookAheadExcessLiquidity  *float64 `json:"LookAheadExcessLiquidity"`
	LookAheadExcessLiquidityC *float64 `json:"LookAheadExcessLiquidity-C"`
	LookAheadExcessLiquidityS *float64 `json:"LookAheadExcessLiquidity-S"`
	LookAheadInitMarginReq    *float64 `json:"LookAheadInitMarginReq"`
	LookAheadInitMarginReqC   *float64 `json:"LookAheadInitMarginReq-C"`
	LookAheadInitMarginReqS   *float64 `json:"LookAheadInitMarginReq-S"`
	LookAheadMaintMarginReq   *float64 `json:"LookAheadMaintMarginReq"`
	LookAheadMaintMarginReqC  *float64 `json:"LookAheadMaintMarginReq-C"`
	LookAheadMaintMarginReqS  *float64 `json:"LookAheadMaintMarginReq-S"`
	MaintMarginReq            *float64 `json:"MaintMarginReq"`
	MaintMarginReqC           *float64 `json:"MaintMarginReq-C"`
	MaintMarginReqS           *float64 `json:"MaintMarginReq-S"`
	NetLiquidation            *float64 `json:"NetLiquidation"`
	NetLiquidationC           *float64 `json:"NetLiquidation-C"`
	NetLiquidationS           *float64 `json:"NetLiquidation-S"`
	NetLiquidationUncertainty *float64 `json:"NetLiquidationUncertainty"`
	PaSharesValue             *float64 `json:"PASharesValue"`
	PaSharesValueC            *float64 `json:"PASharesValue-C"`
	PaSharesValueS            *float64 `json:"PASharesValue-S"`
	PostExpirationExcess      *float64 `json:"PostExpirationExcess"`
	PostExpirationExcessC     *float64 `json:"PostExpirationExcess-C"`
	PostExpirationExcessS     *float64 `json:"PostExpirationExcess-S"`
	PostExpirationMargin      *float64 `json:"PostExpirationMargin"`
	PostExpirationMarginC     *float64 `json:"PostExpirationMargin-C"`
	PostExpirationMarginS     *float64 `json:"PostExpirationMargin-S"`
	RegTEquity                *float64 `json:"RegTEquity"`
	RegTEquityS               *float64 `json:"RegTEquity-S"`
	RegTMargin                *float64 `json:"RegTMargin"`
	RegTMarginS               *float64 `json:"RegTMargin-S"`
	Sma                       *float64 `json:"SMA"`
	SmaS                      *float64 `json:"SMA-S"`
	TotalCashValue            *float64 `json:"TotalCashValue"`
	TotalCashValueC           *float64 `json:"TotalCashValue-C"`
	TotalCashValueS           *float64 `json:"TotalCashValue-S"`
}

type GetAccountsAccountSummary200ApplicationJSON struct {
	Info    *GetAccountsAccountSummary200ApplicationJSONInfo    `json:"Info"`
	Ledger  []GetAccountsAccountSummary200ApplicationJSONLedger `json:"Ledger"`
	Summary *GetAccountsAccountSummary200ApplicationJSONSummary `json:"Summary"`
}

type GetAccountsAccountSummaryResponse struct {
	ContentType                                       string
	GetAccountsAccountSummary200ApplicationJSONObject *GetAccountsAccountSummary200ApplicationJSON
	StatusCode                                        int64
}
