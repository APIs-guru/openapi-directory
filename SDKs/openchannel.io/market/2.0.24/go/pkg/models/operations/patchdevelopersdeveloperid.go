package operations



type PatchDevelopersDeveloperIDPathParams struct {
    DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
    
}

type PatchDevelopersDeveloperIDQueryParams struct {
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type PatchDevelopersDeveloperIDRequest struct {
    PathParams PatchDevelopersDeveloperIDPathParams 
    QueryParams PatchDevelopersDeveloperIDQueryParams 
    
}

type PatchDevelopersDeveloperIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

