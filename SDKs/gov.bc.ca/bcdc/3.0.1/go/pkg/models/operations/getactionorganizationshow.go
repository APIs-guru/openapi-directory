package operations



type GetActionOrganizationShowQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IncludeDatasets *bool `queryParam:"style=form,explode=true,name=include_datasets"`
    
}

type GetActionOrganizationShowRequest struct {
    QueryParams GetActionOrganizationShowQueryParams 
    
}

type GetActionOrganizationShowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

