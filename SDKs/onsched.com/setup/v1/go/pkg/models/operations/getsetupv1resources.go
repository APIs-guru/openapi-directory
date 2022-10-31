package operations



type GetSetupV1ResourcesQueryParams struct {
    Deleted *bool `queryParam:"style=form,explode=true,name=deleted"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    GoogleAuthReturnURL *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
    ResourceGroupID *string `queryParam:"style=form,explode=true,name=resourceGroupId"`
    
}

type GetSetupV1ResourcesRequest struct {
    QueryParams GetSetupV1ResourcesQueryParams 
    
}

type GetSetupV1ResourcesResponse struct {
    ContentType string 
    ResourceListViewModel map[string]interface{} 
    StatusCode int64 
    
}

