package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1BusinessusersEmailCompaniesPathParams struct {
    Email string `pathParam:"style=simple,explode=false,name=email"`
    
}

type GetSetupV1BusinessusersEmailCompaniesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    SearchText *string `queryParam:"style=form,explode=true,name=searchText"`
    
}

type GetSetupV1BusinessusersEmailCompaniesRequest struct {
    PathParams GetSetupV1BusinessusersEmailCompaniesPathParams 
    QueryParams GetSetupV1BusinessusersEmailCompaniesQueryParams 
    
}

type GetSetupV1BusinessusersEmailCompaniesResponse struct {
    AuthorizedCompanyListViewModel *shared.AuthorizedCompanyListViewModel 
    ContentType string 
    StatusCode int64 
    
}

