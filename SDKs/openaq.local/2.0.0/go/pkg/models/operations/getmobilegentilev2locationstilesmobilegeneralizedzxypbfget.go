package operations

import (
	"openapi/pkg/models/shared"
)

type GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams struct {
	X int64 `pathParam:"style=simple,explode=false,name=x"`
	Y int64 `pathParam:"style=simple,explode=false,name=y"`
	Z int64 `pathParam:"style=simple,explode=false,name=z"`
}

type GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams struct {
	IsAnalysis      *bool        `queryParam:"style=form,explode=true,name=isAnalysis"`
	IsMobile        *bool        `queryParam:"style=form,explode=true,name=isMobile"`
	LastUpdatedFrom *interface{} `queryParam:"style=form,explode=true,name=lastUpdatedFrom"`
	LastUpdatedTo   *interface{} `queryParam:"style=form,explode=true,name=lastUpdatedTo"`
	Location        []int64      `queryParam:"style=form,explode=true,name=location"`
	Parameter       *interface{} `queryParam:"style=form,explode=true,name=parameter"`
	Project         *int64       `queryParam:"style=form,explode=true,name=project"`
}

type GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest struct {
	PathParams  GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams
	QueryParams GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams
}

type GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
