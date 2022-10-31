package operations



type GetOrganizationActionBatchesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}


type GetOrganizationActionBatchesStatusEnum string

const (
    GetOrganizationActionBatchesStatusEnumPending GetOrganizationActionBatchesStatusEnum = "pending"
GetOrganizationActionBatchesStatusEnumCompleted GetOrganizationActionBatchesStatusEnum = "completed"
GetOrganizationActionBatchesStatusEnumFailed GetOrganizationActionBatchesStatusEnum = "failed"
)


type GetOrganizationActionBatchesQueryParams struct {
    Status *GetOrganizationActionBatchesStatusEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type GetOrganizationActionBatchesRequest struct {
    PathParams GetOrganizationActionBatchesPathParams 
    QueryParams GetOrganizationActionBatchesQueryParams 
    
}

type GetOrganizationActionBatchesResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationActionBatches200ApplicationJSONObject map[string]interface{} 
    
}

