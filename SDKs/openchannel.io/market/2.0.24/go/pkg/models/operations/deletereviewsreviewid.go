package operations



type DeleteReviewsReviewIDPathParams struct {
    ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type DeleteReviewsReviewIDQueryParams struct {
    UserAccountID *string `queryParam:"style=form,explode=true,name=userAccountId"`
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type DeleteReviewsReviewIDRequest struct {
    PathParams DeleteReviewsReviewIDPathParams 
    QueryParams DeleteReviewsReviewIDQueryParams 
    
}

type DeleteReviewsReviewIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

