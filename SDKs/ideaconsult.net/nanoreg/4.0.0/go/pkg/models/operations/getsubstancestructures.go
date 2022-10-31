package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubstanceStructuresPathParams struct {
	Db   shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
	UUID string                     `pathParam:"style=simple,explode=false,name=uuid"`
}

type GetSubstanceStructuresQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
}

type GetSubstanceStructuresRequest struct {
	PathParams  GetSubstanceStructuresPathParams
	QueryParams GetSubstanceStructuresQueryParams
}

type GetSubstanceStructuresResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
