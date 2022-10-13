package operations

import (
	"openapi/pkg/models/shared"
)

type GetReviewsResourceTypeJSONResourceTypeEnum string

const (
	GetReviewsResourceTypeJSONResourceTypeEnumAll   GetReviewsResourceTypeJSONResourceTypeEnum = "all"
	GetReviewsResourceTypeJSONResourceTypeEnumPicks GetReviewsResourceTypeJSONResourceTypeEnum = "picks"
)

type GetReviewsResourceTypeJSONPathParams struct {
	ResourceType GetReviewsResourceTypeJSONResourceTypeEnum `pathParam:"style=simple,explode=false,name=resource-type"`
}

type GetReviewsResourceTypeJSONOrderEnum string

const (
	GetReviewsResourceTypeJSONOrderEnumByTitle           GetReviewsResourceTypeJSONOrderEnum = "by-title"
	GetReviewsResourceTypeJSONOrderEnumByPublicationDate GetReviewsResourceTypeJSONOrderEnum = "by-publication-date"
	GetReviewsResourceTypeJSONOrderEnumByOpeningDate     GetReviewsResourceTypeJSONOrderEnum = "by-opening-date"
)

type GetReviewsResourceTypeJSONQueryParams struct {
	Offset *int64                               `queryParam:"style=form,explode=true,name=offset"`
	Order  *GetReviewsResourceTypeJSONOrderEnum `queryParam:"style=form,explode=true,name=order"`
}

type GetReviewsResourceTypeJSONRequest struct {
	PathParams  GetReviewsResourceTypeJSONPathParams
	QueryParams GetReviewsResourceTypeJSONQueryParams
}

type GetReviewsResourceTypeJSON200ApplicationJSON struct {
	Copyright  *string        `json:"copyright"`
	NumResults *int64         `json:"num_results"`
	Results    []shared.Movie `json:"results"`
	Status     *string        `json:"status"`
}

type GetReviewsResourceTypeJSONResponse struct {
	ContentType                                        string
	GetReviewsResourceTypeJSON200ApplicationJSONObject *GetReviewsResourceTypeJSON200ApplicationJSON
	StatusCode                                         int64
}
