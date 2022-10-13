package operations

import (
	"openapi/pkg/models/shared"
)

type LandlordControllerGetTenancyPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetTenancyQueryParams struct {
	TenancyID string `queryParam:"style=form,explode=true,name=tenancyID"`
	Token     string `queryParam:"style=form,explode=true,name=token"`
}

type LandlordControllerGetTenancyRequest struct {
	PathParams  LandlordControllerGetTenancyPathParams
	QueryParams LandlordControllerGetTenancyQueryParams
}

type LandlordControllerGetTenancyResponse struct {
	ContentType          string
	LandlordTenancyModel *shared.LandlordTenancyModel
	StatusCode           int64
}
