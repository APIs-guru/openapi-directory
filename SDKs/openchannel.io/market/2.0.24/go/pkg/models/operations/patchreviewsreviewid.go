package operations



type PatchReviewsReviewIDPathParams struct {
    ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type PatchReviewsReviewIDQueryParams struct {
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Headline *string `queryParam:"style=form,explode=true,name=headline"`
    Rating *int64 `queryParam:"style=form,explode=true,name=rating"`
    UserAccountID *string `queryParam:"style=form,explode=true,name=userAccountId"`
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type PatchReviewsReviewIDRequest struct {
    PathParams PatchReviewsReviewIDPathParams 
    QueryParams PatchReviewsReviewIDQueryParams 
    
}

type PatchReviewsReviewIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

