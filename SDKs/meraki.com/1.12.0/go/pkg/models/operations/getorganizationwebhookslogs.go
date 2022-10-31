package operations



type GetOrganizationWebhooksLogsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationWebhooksLogsQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    URL *string `queryParam:"style=form,explode=true,name=url"`
    
}

type GetOrganizationWebhooksLogsRequest struct {
    PathParams GetOrganizationWebhooksLogsPathParams 
    QueryParams GetOrganizationWebhooksLogsQueryParams 
    
}

type GetOrganizationWebhooksLogsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetOrganizationWebhooksLogs200ApplicationJSONObject map[string]interface{} 
    
}

