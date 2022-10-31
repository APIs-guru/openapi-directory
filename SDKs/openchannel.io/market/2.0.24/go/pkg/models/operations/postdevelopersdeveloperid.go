package operations



type PostDevelopersDeveloperIDPathParams struct {
    DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
    
}

type PostDevelopersDeveloperIDQueryParams struct {
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type PostDevelopersDeveloperIDRequest struct {
    PathParams PostDevelopersDeveloperIDPathParams 
    QueryParams PostDevelopersDeveloperIDQueryParams 
    
}

type PostDevelopersDeveloperIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

