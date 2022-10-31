package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaggedImagesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetTaggedImagesOrderByEnum string

const (
	GetTaggedImagesOrderByEnumNewest GetTaggedImagesOrderByEnum = "Newest"
	GetTaggedImagesOrderByEnumOldest GetTaggedImagesOrderByEnum = "Oldest"
)

type GetTaggedImagesQueryParams struct {
	IterationID *string                     `queryParam:"style=form,explode=true,name=iterationId"`
	OrderBy     *GetTaggedImagesOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	Skip        *int32                      `queryParam:"style=form,explode=true,name=skip"`
	TagIds      []string                    `queryParam:"style=form,explode=false,name=tagIds"`
	Take        *int32                      `queryParam:"style=form,explode=true,name=take"`
}

type GetTaggedImagesHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetTaggedImagesRequest struct {
	PathParams  GetTaggedImagesPathParams
	QueryParams GetTaggedImagesQueryParams
	Headers     GetTaggedImagesHeaders
}

type GetTaggedImagesResponse struct {
	Body        []byte
	ContentType string
	Images      []shared.Image
	StatusCode  int64
}
