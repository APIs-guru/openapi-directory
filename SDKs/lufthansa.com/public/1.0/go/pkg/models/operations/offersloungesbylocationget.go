package operations

import (
"openapi/pkg/models/shared")

type OffersLoungesByLocationGetPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    
}

type OffersLoungesByLocationGetQueryParams struct {
    CabinClass *string `queryParam:"style=form,explode=true,name=cabinClass"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    TierCode *string `queryParam:"style=form,explode=true,name=tierCode"`
    
}

type OffersLoungesByLocationGetHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type OffersLoungesByLocationGetSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type OffersLoungesByLocationGetRequest struct {
    PathParams OffersLoungesByLocationGetPathParams 
    QueryParams OffersLoungesByLocationGetQueryParams 
    Headers OffersLoungesByLocationGetHeaders 
    Security OffersLoungesByLocationGetSecurity 
    
}

type OffersLoungesByLocationGetResponse struct {
    ContentType string 
    OffersLoungesByLocationGet200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

