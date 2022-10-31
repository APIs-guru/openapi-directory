package operations



type PostReviewsQueryParams struct {
    AppID string `queryParam:"style=form,explode=true,name=appId"`
    AutoApprove *bool `queryParam:"style=form,explode=true,name=autoApprove"`
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Description string `queryParam:"style=form,explode=true,name=description"`
    Headline string `queryParam:"style=form,explode=true,name=headline"`
    MustOwnApp *bool `queryParam:"style=form,explode=true,name=mustOwnApp"`
    Rating int64 `queryParam:"style=form,explode=true,name=rating"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    UserAccountID *string `queryParam:"style=form,explode=true,name=userAccountId"`
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type PostReviewsRequest struct {
    QueryParams PostReviewsQueryParams 
    
}

type PostReviewsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

