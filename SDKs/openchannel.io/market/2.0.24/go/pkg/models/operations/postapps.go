package operations



type PostAppsQueryParams struct {
    Access *string `queryParam:"style=form,explode=true,name=access"`
    Allow *string `queryParam:"style=form,explode=true,name=allow"`
    Attributes *string `queryParam:"style=form,explode=true,name=attributes"`
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    DeveloperID string `queryParam:"style=form,explode=true,name=developerId"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    Restrict *string `queryParam:"style=form,explode=true,name=restrict"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type PostAppsRequest struct {
    QueryParams PostAppsQueryParams 
    
}

type PostAppsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

