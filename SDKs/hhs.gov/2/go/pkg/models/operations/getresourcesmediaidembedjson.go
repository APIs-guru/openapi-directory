package operations



type GetResourcesMediaIDEmbedJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesMediaIDEmbedJSONQueryParams struct {
    DisplayMethod *string `queryParam:"style=form,explode=false,name=displayMethod"`
    DivID *string `queryParam:"style=form,explode=false,name=divId"`
    ExcludeDiv *bool `queryParam:"style=form,explode=false,name=excludeDiv"`
    ExcludeJquery *bool `queryParam:"style=form,explode=false,name=excludeJquery"`
    Flavor *string `queryParam:"style=form,explode=false,name=flavor"`
    Height *int32 `queryParam:"style=form,explode=false,name=height"`
    IframeName *string `queryParam:"style=form,explode=false,name=iframeName"`
    Width *int32 `queryParam:"style=form,explode=false,name=width"`
    
}

type GetResourcesMediaIDEmbedJSONRequest struct {
    PathParams GetResourcesMediaIDEmbedJSONPathParams 
    QueryParams GetResourcesMediaIDEmbedJSONQueryParams 
    
}

type GetResourcesMediaIDEmbedJSONResponse struct {
    ContentType string 
    GetResourcesMediaIDEmbedJSON200ApplicationJSONString *string 
    StatusCode int64 
    
}

