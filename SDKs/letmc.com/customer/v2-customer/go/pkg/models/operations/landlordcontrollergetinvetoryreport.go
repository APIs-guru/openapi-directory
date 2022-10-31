package operations

type LandlordControllerGetInvetoryReportPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetInvetoryReportQueryParams struct {
	TenancyID string `queryParam:"style=form,explode=true,name=tenancyID"`
	Token     string `queryParam:"style=form,explode=true,name=token"`
}

type LandlordControllerGetInvetoryReportRequest struct {
	PathParams  LandlordControllerGetInvetoryReportPathParams
	QueryParams LandlordControllerGetInvetoryReportQueryParams
}

type LandlordControllerGetInvetoryReportResponse struct {
	Body        []byte
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
