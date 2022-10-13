package operations

import (
	"openapi/pkg/models/shared"
)

type GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams struct {
	X int64 `pathParam:"style=simple,explode=false,name=x"`
	Y int64 `pathParam:"style=simple,explode=false,name=y"`
	Z int64 `pathParam:"style=simple,explode=false,name=z"`
}

type GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams struct {
	DateFrom        interface{}  `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo          interface{}  `queryParam:"style=form,explode=true,name=dateTo"`
	IsAnalysis      *bool        `queryParam:"style=form,explode=true,name=isAnalysis"`
	IsMobile        *bool        `queryParam:"style=form,explode=true,name=isMobile"`
	LastUpdatedFrom *interface{} `queryParam:"style=form,explode=true,name=lastUpdatedFrom"`
	LastUpdatedTo   *interface{} `queryParam:"style=form,explode=true,name=lastUpdatedTo"`
	Location        []int64      `queryParam:"style=form,explode=true,name=location"`
	Parameter       *interface{} `queryParam:"style=form,explode=true,name=parameter"`
	Project         *int64       `queryParam:"style=form,explode=true,name=project"`
}

type GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest struct {
	PathParams  GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams
	QueryParams GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams
}

type GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
