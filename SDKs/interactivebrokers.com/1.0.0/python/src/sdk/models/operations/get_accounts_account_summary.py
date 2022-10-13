from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAccountsAccountSummaryPathParams:
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountSummaryRequest:
    path_params: GetAccountsAccountSummaryPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAccountsAccountSummary200ApplicationJSONInfo:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountCode' }})
    account_ready: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountReady' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountType' }})
    cushion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cushion' }})
    day_trades_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayTradesRemaining' }})
    day_trades_remaining_t: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayTradesRemainingT' }})
    day_trades_remaining_t_plus_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayTradesRemainingT+2' }})
    day_trades_remaining_t_plus_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayTradesRemainingT+3' }})
    day_trades_remaining_t_plus_4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayTradesRemainingT+4' }})
    highest_severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HighestSeverity' }})
    leverage_s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Leverage-S' }})
    look_ahead_next_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadNextChange' }})
    segment_title_c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentTitle-C' }})
    segment_title_s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentTitle-S' }})
    trading_type_s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TradingType-S' }})
    what_if_pm_enabled: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WhatIfPMEnabled' }})
    

@dataclass_json
@dataclass
class GetAccountsAccountSummary200ApplicationJSONLedger:
    cash_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CashBalance' }})
    cash_balance_fx_segment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CashBalanceFXSegment' }})
    cash_cum_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CashCumQty' }})
    exchange_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRate' }})
    future_option_market_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FutureOptionMarketValue' }})
    future_pnl: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FuturePNL' }})
    net_dividend: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetDividend' }})
    net_interest: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetInterest' }})
    net_liquidation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetLiquidation' }})
    option_market_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionMarketValue' }})
    realized_pnl: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RealizedPNL' }})
    stock_market_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StockMarketValue' }})
    total_cash_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCashBalance' }})
    unrealized_pnl: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnrealizedPNL' }})
    

@dataclass_json
@dataclass
class GetAccountsAccountSummary200ApplicationJSONSummary:
    accrued_cash: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccruedCash' }})
    accrued_cash_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccruedCash-C' }})
    accrued_cash_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccruedCash-S' }})
    accrued_dividend: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccruedDividend' }})
    accrued_dividend_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccruedDividend-C' }})
    accrued_dividend_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccruedDividend-S' }})
    available_funds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableFunds' }})
    available_funds_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableFunds-C' }})
    available_funds_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableFunds-S' }})
    billable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Billable' }})
    billable_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Billable-C' }})
    billable_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Billable-S' }})
    buying_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuyingPower' }})
    equity_with_loan_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EquityWithLoanValue' }})
    equity_with_loan_value_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EquityWithLoanValue-C' }})
    equity_with_loan_value_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EquityWithLoanValue-S' }})
    excess_liquidity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcessLiquidity' }})
    excess_liquidity_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcessLiquidity-C' }})
    excess_liquidity_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcessLiquidity-S' }})
    full_available_funds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullAvailableFunds' }})
    full_available_funds_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullAvailableFunds-C' }})
    full_available_funds_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullAvailableFunds-S' }})
    full_excess_liquidity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullExcessLiquidity' }})
    full_excess_liquidity_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullExcessLiquidity-C' }})
    full_excess_liquidity_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullExcessLiquidity-S' }})
    full_init_margin_req: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullInitMarginReq' }})
    full_init_margin_req_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullInitMarginReq-C' }})
    full_init_margin_req_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullInitMarginReq-S' }})
    full_maint_margin_req: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullMaintMarginReq' }})
    full_maint_margin_req_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullMaintMarginReq-C' }})
    full_maint_margin_req_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullMaintMarginReq-S' }})
    gross_position_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrossPositionValue' }})
    gross_position_value_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrossPositionValue-C' }})
    gross_position_value_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrossPositionValue-S' }})
    indian_stock_haircut: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndianStockHaircut' }})
    indian_stock_haircut_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndianStockHaircut-C' }})
    indian_stock_haircut_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndianStockHaircut-S' }})
    init_margin_req: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitMarginReq' }})
    init_margin_req_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitMarginReq-C' }})
    init_margin_req_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitMarginReq-S' }})
    insured_deposit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsuredDeposit' }})
    insured_deposit_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsuredDeposit-C' }})
    insured_deposit_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsuredDeposit-S' }})
    look_ahead_available_funds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadAvailableFunds' }})
    look_ahead_available_funds_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadAvailableFunds-C' }})
    look_ahead_available_funds_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadAvailableFunds-S' }})
    look_ahead_excess_liquidity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadExcessLiquidity' }})
    look_ahead_excess_liquidity_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadExcessLiquidity-C' }})
    look_ahead_excess_liquidity_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadExcessLiquidity-S' }})
    look_ahead_init_margin_req: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadInitMarginReq' }})
    look_ahead_init_margin_req_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadInitMarginReq-C' }})
    look_ahead_init_margin_req_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadInitMarginReq-S' }})
    look_ahead_maint_margin_req: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadMaintMarginReq' }})
    look_ahead_maint_margin_req_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadMaintMarginReq-C' }})
    look_ahead_maint_margin_req_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookAheadMaintMarginReq-S' }})
    maint_margin_req: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintMarginReq' }})
    maint_margin_req_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintMarginReq-C' }})
    maint_margin_req_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintMarginReq-S' }})
    net_liquidation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetLiquidation' }})
    net_liquidation_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetLiquidation-C' }})
    net_liquidation_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetLiquidation-S' }})
    net_liquidation_uncertainty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetLiquidationUncertainty' }})
    pa_shares_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PASharesValue' }})
    pa_shares_value_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PASharesValue-C' }})
    pa_shares_value_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PASharesValue-S' }})
    post_expiration_excess: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostExpirationExcess' }})
    post_expiration_excess_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostExpirationExcess-C' }})
    post_expiration_excess_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostExpirationExcess-S' }})
    post_expiration_margin: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostExpirationMargin' }})
    post_expiration_margin_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostExpirationMargin-C' }})
    post_expiration_margin_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostExpirationMargin-S' }})
    reg_t_equity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegTEquity' }})
    reg_t_equity_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegTEquity-S' }})
    reg_t_margin: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegTMargin' }})
    reg_t_margin_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegTMargin-S' }})
    sma: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMA' }})
    sma_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMA-S' }})
    total_cash_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCashValue' }})
    total_cash_value_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCashValue-C' }})
    total_cash_value_s: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCashValue-S' }})
    

@dataclass_json
@dataclass
class GetAccountsAccountSummary200ApplicationJSON:
    info: Optional[GetAccountsAccountSummary200ApplicationJSONInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Info' }})
    ledger: Optional[List[GetAccountsAccountSummary200ApplicationJSONLedger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ledger' }})
    summary: Optional[GetAccountsAccountSummary200ApplicationJSONSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    

@dataclass
class GetAccountsAccountSummaryResponse:
    content_type: str = field(default=None)
    get_accounts_account_summary_200_application_json_object: Optional[GetAccountsAccountSummary200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
