package operations

import (
	"openapi/pkg/models/shared"
)

type LandlordControllerGetAccountsPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetAccountsQueryParams struct {
	Token string `queryParam:"style=form,explode=true,name=token"`
}

type LandlordControllerGetAccountsRequest struct {
	PathParams  LandlordControllerGetAccountsPathParams
	QueryParams LandlordControllerGetAccountsQueryParams
}

type LandlordControllerGetAccountsResponse struct {
	ContentType             string
	LandlordAccountingModel *shared.LandlordAccountingModel
	StatusCode              int64
}
