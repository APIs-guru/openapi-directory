package operations

import (
"openapi/pkg/models/shared")

type PostAccountsAccountOrdersPathParams struct {
    Account string `pathParam:"style=simple,explode=false,name=account"`
    
}

type PostAccountsAccountOrdersRequestBody struct {
    AuxPrice *float64 `json:"Aux Price,omitempty"`
    ContractID *float64 `json:"ContractId,omitempty"`
    Currency *string `json:"Currency,omitempty"`
    CustomerOrderID *string `json:"CustomerOrderId,omitempty"`
    GermanHftAlgo *bool `json:"GermanHftAlgo,omitempty"`
    InstrumentType *string `json:"InstrumentType,omitempty"`
    ListingExchange *string `json:"ListingExchange,omitempty"`
    Mifid2Algo *string `json:"Mifid2Algo,omitempty"`
    Mifid2DecisionMaker *string `json:"Mifid2DecisionMaker,omitempty"`
    Mifid2ExecutionAlgo *string `json:"Mifid2ExecutionAlgo,omitempty"`
    Mifid2ExecutionTrader *string `json:"Mifid2ExecutionTrader,omitempty"`
    OrderType *float64 `json:"Order Type,omitempty"`
    OrderRestrictions *float64 `json:"OrderRestrictions,omitempty"`
    OutsideRth *float64 `json:"Outside RTH,omitempty"`
    Price *float64 `json:"Price,omitempty"`
    Quantity *float64 `json:"Quantity,omitempty"`
    Side *float64 `json:"Side,omitempty"`
    Ticker *string `json:"Ticker,omitempty"`
    TimeInForce *float64 `json:"Time in Force,omitempty"`
    
}

type PostAccountsAccountOrdersRequest struct {
    PathParams PostAccountsAccountOrdersPathParams 
    Request PostAccountsAccountOrdersRequestBody `request:"mediaType=application/json"`
    
}

type PostAccountsAccountOrdersResponse struct {
    ContentType string 
    StatusCode int64 
    OrderStates []shared.OrderState 
    
}

