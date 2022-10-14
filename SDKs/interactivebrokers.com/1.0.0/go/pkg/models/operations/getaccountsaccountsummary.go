package operations

type GetAccountsAccountSummaryPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountSummaryRequest struct {
	PathParams GetAccountsAccountSummaryPathParams
}

type GetAccountsAccountSummary200ApplicationJSONInfo struct {
	AccountCode              *string `json:"AccountCode,omitempty"`
	AccountReady             *string `json:"AccountReady,omitempty"`
	AccountType              *string `json:"AccountType,omitempty"`
	Cushion                  *string `json:"Cushion,omitempty"`
	DayTradesRemaining       *string `json:"DayTradesRemaining,omitempty"`
	DayTradesRemainingT      *string `json:"DayTradesRemainingT,omitempty"`
	DayTradesRemainingTPlus2 *string `json:"DayTradesRemainingT+2,omitempty"`
	DayTradesRemainingTPlus3 *string `json:"DayTradesRemainingT+3,omitempty"`
	DayTradesRemainingTPlus4 *string `json:"DayTradesRemainingT+4,omitempty"`
	HighestSeverity          *string `json:"HighestSeverity,omitempty"`
	LeverageS                *string `json:"Leverage-S,omitempty"`
	LookAheadNextChange      *string `json:"LookAheadNextChange,omitempty"`
	SegmentTitleC            *string `json:"SegmentTitle-C,omitempty"`
	SegmentTitleS            *string `json:"SegmentTitle-S,omitempty"`
	TradingTypeS             *string `json:"TradingType-S,omitempty"`
	WhatIfPmEnabled          *string `json:"WhatIfPMEnabled,omitempty"`
}

type GetAccountsAccountSummary200ApplicationJSONLedger struct {
	CashBalance             *float64 `json:"CashBalance,omitempty"`
	CashBalanceFxSegment    *float64 `json:"CashBalanceFXSegment,omitempty"`
	CashCumQty              *float64 `json:"CashCumQty,omitempty"`
	ExchangeRate            *float64 `json:"ExchangeRate,omitempty"`
	FutureOptionMarketValue *float64 `json:"FutureOptionMarketValue,omitempty"`
	FuturePnl               *float64 `json:"FuturePNL,omitempty"`
	NetDividend             *float64 `json:"NetDividend,omitempty"`
	NetInterest             *float64 `json:"NetInterest,omitempty"`
	NetLiquidation          *float64 `json:"NetLiquidation,omitempty"`
	OptionMarketValue       *float64 `json:"OptionMarketValue,omitempty"`
	RealizedPnl             *float64 `json:"RealizedPNL,omitempty"`
	StockMarketValue        *float64 `json:"StockMarketValue,omitempty"`
	TotalCashBalance        *float64 `json:"TotalCashBalance,omitempty"`
	UnrealizedPnl           *float64 `json:"UnrealizedPNL,omitempty"`
}

type GetAccountsAccountSummary200ApplicationJSONSummary struct {
	AccruedCash               *float64 `json:"AccruedCash,omitempty"`
	AccruedCashC              *float64 `json:"AccruedCash-C,omitempty"`
	AccruedCashS              *float64 `json:"AccruedCash-S,omitempty"`
	AccruedDividend           *float64 `json:"AccruedDividend,omitempty"`
	AccruedDividendC          *float64 `json:"AccruedDividend-C,omitempty"`
	AccruedDividendS          *float64 `json:"AccruedDividend-S,omitempty"`
	AvailableFunds            *float64 `json:"AvailableFunds,omitempty"`
	AvailableFundsC           *float64 `json:"AvailableFunds-C,omitempty"`
	AvailableFundsS           *float64 `json:"AvailableFunds-S,omitempty"`
	Billable                  *float64 `json:"Billable,omitempty"`
	BillableC                 *float64 `json:"Billable-C,omitempty"`
	BillableS                 *float64 `json:"Billable-S,omitempty"`
	BuyingPower               *float64 `json:"BuyingPower,omitempty"`
	EquityWithLoanValue       *float64 `json:"EquityWithLoanValue,omitempty"`
	EquityWithLoanValueC      *float64 `json:"EquityWithLoanValue-C,omitempty"`
	EquityWithLoanValueS      *float64 `json:"EquityWithLoanValue-S,omitempty"`
	ExcessLiquidity           *float64 `json:"ExcessLiquidity,omitempty"`
	ExcessLiquidityC          *float64 `json:"ExcessLiquidity-C,omitempty"`
	ExcessLiquidityS          *float64 `json:"ExcessLiquidity-S,omitempty"`
	FullAvailableFunds        *float64 `json:"FullAvailableFunds,omitempty"`
	FullAvailableFundsC       *float64 `json:"FullAvailableFunds-C,omitempty"`
	FullAvailableFundsS       *float64 `json:"FullAvailableFunds-S,omitempty"`
	FullExcessLiquidity       *float64 `json:"FullExcessLiquidity,omitempty"`
	FullExcessLiquidityC      *float64 `json:"FullExcessLiquidity-C,omitempty"`
	FullExcessLiquidityS      *float64 `json:"FullExcessLiquidity-S,omitempty"`
	FullInitMarginReq         *float64 `json:"FullInitMarginReq,omitempty"`
	FullInitMarginReqC        *float64 `json:"FullInitMarginReq-C,omitempty"`
	FullInitMarginReqS        *float64 `json:"FullInitMarginReq-S,omitempty"`
	FullMaintMarginReq        *float64 `json:"FullMaintMarginReq,omitempty"`
	FullMaintMarginReqC       *float64 `json:"FullMaintMarginReq-C,omitempty"`
	FullMaintMarginReqS       *float64 `json:"FullMaintMarginReq-S,omitempty"`
	GrossPositionValue        *float64 `json:"GrossPositionValue,omitempty"`
	GrossPositionValueC       *float64 `json:"GrossPositionValue-C,omitempty"`
	GrossPositionValueS       *float64 `json:"GrossPositionValue-S,omitempty"`
	IndianStockHaircut        *float64 `json:"IndianStockHaircut,omitempty"`
	IndianStockHaircutC       *float64 `json:"IndianStockHaircut-C,omitempty"`
	IndianStockHaircutS       *float64 `json:"IndianStockHaircut-S,omitempty"`
	InitMarginReq             *float64 `json:"InitMarginReq,omitempty"`
	InitMarginReqC            *float64 `json:"InitMarginReq-C,omitempty"`
	InitMarginReqS            *float64 `json:"InitMarginReq-S,omitempty"`
	InsuredDeposit            *float64 `json:"InsuredDeposit,omitempty"`
	InsuredDepositC           *float64 `json:"InsuredDeposit-C,omitempty"`
	InsuredDepositS           *float64 `json:"InsuredDeposit-S,omitempty"`
	LookAheadAvailableFunds   *float64 `json:"LookAheadAvailableFunds,omitempty"`
	LookAheadAvailableFundsC  *float64 `json:"LookAheadAvailableFunds-C,omitempty"`
	LookAheadAvailableFundsS  *float64 `json:"LookAheadAvailableFunds-S,omitempty"`
	LookAheadExcessLiquidity  *float64 `json:"LookAheadExcessLiquidity,omitempty"`
	LookAheadExcessLiquidityC *float64 `json:"LookAheadExcessLiquidity-C,omitempty"`
	LookAheadExcessLiquidityS *float64 `json:"LookAheadExcessLiquidity-S,omitempty"`
	LookAheadInitMarginReq    *float64 `json:"LookAheadInitMarginReq,omitempty"`
	LookAheadInitMarginReqC   *float64 `json:"LookAheadInitMarginReq-C,omitempty"`
	LookAheadInitMarginReqS   *float64 `json:"LookAheadInitMarginReq-S,omitempty"`
	LookAheadMaintMarginReq   *float64 `json:"LookAheadMaintMarginReq,omitempty"`
	LookAheadMaintMarginReqC  *float64 `json:"LookAheadMaintMarginReq-C,omitempty"`
	LookAheadMaintMarginReqS  *float64 `json:"LookAheadMaintMarginReq-S,omitempty"`
	MaintMarginReq            *float64 `json:"MaintMarginReq,omitempty"`
	MaintMarginReqC           *float64 `json:"MaintMarginReq-C,omitempty"`
	MaintMarginReqS           *float64 `json:"MaintMarginReq-S,omitempty"`
	NetLiquidation            *float64 `json:"NetLiquidation,omitempty"`
	NetLiquidationC           *float64 `json:"NetLiquidation-C,omitempty"`
	NetLiquidationS           *float64 `json:"NetLiquidation-S,omitempty"`
	NetLiquidationUncertainty *float64 `json:"NetLiquidationUncertainty,omitempty"`
	PaSharesValue             *float64 `json:"PASharesValue,omitempty"`
	PaSharesValueC            *float64 `json:"PASharesValue-C,omitempty"`
	PaSharesValueS            *float64 `json:"PASharesValue-S,omitempty"`
	PostExpirationExcess      *float64 `json:"PostExpirationExcess,omitempty"`
	PostExpirationExcessC     *float64 `json:"PostExpirationExcess-C,omitempty"`
	PostExpirationExcessS     *float64 `json:"PostExpirationExcess-S,omitempty"`
	PostExpirationMargin      *float64 `json:"PostExpirationMargin,omitempty"`
	PostExpirationMarginC     *float64 `json:"PostExpirationMargin-C,omitempty"`
	PostExpirationMarginS     *float64 `json:"PostExpirationMargin-S,omitempty"`
	RegTEquity                *float64 `json:"RegTEquity,omitempty"`
	RegTEquityS               *float64 `json:"RegTEquity-S,omitempty"`
	RegTMargin                *float64 `json:"RegTMargin,omitempty"`
	RegTMarginS               *float64 `json:"RegTMargin-S,omitempty"`
	Sma                       *float64 `json:"SMA,omitempty"`
	SmaS                      *float64 `json:"SMA-S,omitempty"`
	TotalCashValue            *float64 `json:"TotalCashValue,omitempty"`
	TotalCashValueC           *float64 `json:"TotalCashValue-C,omitempty"`
	TotalCashValueS           *float64 `json:"TotalCashValue-S,omitempty"`
}

type GetAccountsAccountSummary200ApplicationJSON struct {
	Info    *GetAccountsAccountSummary200ApplicationJSONInfo    `json:"Info,omitempty"`
	Ledger  []GetAccountsAccountSummary200ApplicationJSONLedger `json:"Ledger,omitempty"`
	Summary *GetAccountsAccountSummary200ApplicationJSONSummary `json:"Summary,omitempty"`
}

type GetAccountsAccountSummaryResponse struct {
	ContentType                                       string
	GetAccountsAccountSummary200ApplicationJSONObject *GetAccountsAccountSummary200ApplicationJSON
	StatusCode                                        int64
}
