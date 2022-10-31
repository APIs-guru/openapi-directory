package operations

import (
"openapi/pkg/models/shared")

type GetPartnersStoresJSONQueryParams struct {
    AuthToken string `queryParam:"style=form,explode=true,name=auth_token"`
    From string `queryParam:"style=form,explode=true,name=from"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PartnerCode string `queryParam:"style=form,explode=true,name=partner_code"`
    To string `queryParam:"style=form,explode=true,name=to"`
    
}

type GetPartnersStoresJSONRequest struct {
    QueryParams GetPartnersStoresJSONQueryParams 
    
}

type GetPartnersStoresJSONResponse struct {
    ContentType string 
    PartnerError *shared.PartnerError 
    StatusCode int64 
    Types []shared.Type 
    
}

