package operations

import (
"openapi/pkg/models/shared")

type PutAccountsAccountOrdersCustomerOrderIDPathParams struct {
    CustomerOrderID string `pathParam:"style=simple,explode=false,name=CustomerOrderId"`
    Account string `pathParam:"style=simple,explode=false,name=account"`
    
}

type PutAccountsAccountOrdersCustomerOrderIDRequestBody struct {
    AuxPrice *float64 `json:"Aux Price,omitempty"`
    CustomerOrderID *string `json:"CustomerOrderId,omitempty"`
    GermanHftAlgo *bool `json:"GermanHftAlgo,omitempty"`
    Mifid2Algo *string `json:"Mifid2Algo,omitempty"`
    Mifid2DecisionMaker *string `json:"Mifid2DecisionMaker,omitempty"`
    Mifid2ExecutionAlgo *string `json:"Mifid2ExecutionAlgo,omitempty"`
    Mifid2ExecutionTrader *string `json:"Mifid2ExecutionTrader,omitempty"`
    OrderType *float64 `json:"Order Type,omitempty"`
    OrigCustomerOrderID *string `json:"OrigCustomerOrderId,omitempty"`
    OutsideRth *float64 `json:"Outside RTH,omitempty"`
    Price *float64 `json:"Price,omitempty"`
    Quantity *float64 `json:"Quantity,omitempty"`
    Side *float64 `json:"Side,omitempty"`
    TimeInForce *float64 `json:"Time in Force,omitempty"`
    
}

type PutAccountsAccountOrdersCustomerOrderIDRequest struct {
    PathParams PutAccountsAccountOrdersCustomerOrderIDPathParams 
    Request PutAccountsAccountOrdersCustomerOrderIDRequestBody `request:"mediaType=application/json"`
    
}

type PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON struct {
    CustomerOrderID *string `json:"CustomerOrderId,omitempty"`
    OrderQty *float64 `json:"OrderQty,omitempty"`
    OrderType *float64 `json:"OrderType,omitempty"`
    Price *string `json:"Price,omitempty"`
    Side *float64 `json:"Side,omitempty"`
    Status *shared.OrderStatusEnum `json:"Status,omitempty"`
    Symbol *float64 `json:"Symbol,omitempty"`
    Warning *string `json:"Warning,omitempty"`
    
}

type PutAccountsAccountOrdersCustomerOrderIDResponse struct {
    ContentType string 
    PutAccountsAccountOrdersCustomerOrderID200ApplicationJSONObjects []PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON 
    StatusCode int64 
    
}

