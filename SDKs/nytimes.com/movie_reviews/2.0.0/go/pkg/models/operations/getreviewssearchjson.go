package operations

import (
"openapi/pkg/models/shared")


type GetReviewsSearchJSONCriticsPickEnum string

const (
    GetReviewsSearchJSONCriticsPickEnumY GetReviewsSearchJSONCriticsPickEnum = "Y"
GetReviewsSearchJSONCriticsPickEnumN GetReviewsSearchJSONCriticsPickEnum = "N"
)


type GetReviewsSearchJSONQueryParams struct {
    CriticsPick *GetReviewsSearchJSONCriticsPickEnum `queryParam:"style=form,explode=true,name=critics-pick"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OpeningDate *string `queryParam:"style=form,explode=true,name=opening-date"`
    Order *string `queryParam:"style=form,explode=true,name=order"`
    PublicationDate *string `queryParam:"style=form,explode=true,name=publication-date"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Reviewer *string `queryParam:"style=form,explode=true,name=reviewer"`
    
}

type GetReviewsSearchJSONRequest struct {
    QueryParams GetReviewsSearchJSONQueryParams 
    
}

type GetReviewsSearchJSON200ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    NumResults *int64 `json:"num_results,omitempty"`
    Results []shared.Movie `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetReviewsSearchJSONResponse struct {
    ContentType string 
    GetReviewsSearchJSON200ApplicationJSONObject *GetReviewsSearchJSON200ApplicationJSON 
    StatusCode int64 
    
}

