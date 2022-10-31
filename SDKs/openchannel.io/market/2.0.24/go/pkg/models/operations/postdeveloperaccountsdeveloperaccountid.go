package operations



type PostDeveloperAccountsDeveloperAccountIDPathParams struct {
    DeveloperAccountID string `pathParam:"style=simple,explode=false,name=developerAccountId"`
    
}

type PostDeveloperAccountsDeveloperAccountIDQueryParams struct {
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    DeveloperID string `queryParam:"style=form,explode=true,name=developerId"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type PostDeveloperAccountsDeveloperAccountIDRequest struct {
    PathParams PostDeveloperAccountsDeveloperAccountIDPathParams 
    QueryParams PostDeveloperAccountsDeveloperAccountIDQueryParams 
    
}

type PostDeveloperAccountsDeveloperAccountIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

