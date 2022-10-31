package operations

import (
"openapi/pkg/models/shared")

type ModifySubaccountPathParams struct {
    APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
    SubaccountKey string `pathParam:"style=simple,explode=false,name=subaccount_key"`
    
}

type ModifySubaccountSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ModifySubaccountRequest struct {
    PathParams ModifySubaccountPathParams 
    Request shared.ModifySubaccountRequest `request:"mediaType=application/json"`
    Security ModifySubaccountSecurity 
    
}

type ModifySubaccount401ApplicationJSON struct {
    Detail string `json:"detail"`
    Instance string `json:"instance"`
    Title string `json:"title"`
    Type string `json:"type"`
    
}

type ModifySubaccount404ApplicationJSON struct {
    Detail string `json:"detail"`
    Instance string `json:"instance"`
    Title string `json:"title"`
    Type string `json:"type"`
    
}

type ModifySubaccount422ApplicationJSONInvalidParameters struct {
    Name *string `json:"name,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

type ModifySubaccount422ApplicationJSON struct {
    Detail string `json:"detail"`
    Instance string `json:"instance"`
    InvalidParameters []ModifySubaccount422ApplicationJSONInvalidParameters `json:"invalid_parameters"`
    Title string `json:"title"`
    Type string `json:"type"`
    
}

type ModifySubaccountResponse struct {
    ContentType string 
    StatusCode int64 
    SubaccountResponse *interface{} 
    UnprovisionedErrorResponse *shared.UnprovisionedErrorResponse 
    ModifySubaccount401ApplicationJSONObject *ModifySubaccount401ApplicationJSON 
    ModifySubaccount404ApplicationJSONObject *ModifySubaccount404ApplicationJSON 
    ModifySubaccount422ApplicationJSONObject *ModifySubaccount422ApplicationJSON 
    
}

