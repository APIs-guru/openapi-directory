package operations

type LandlordControllerGetSasReportPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetSasReportQueryParams struct {
	Token   string `queryParam:"style=form,explode=true,name=token"`
	YearEnd int32  `queryParam:"style=form,explode=true,name=yearEnd"`
}

type LandlordControllerGetSasReportRequest struct {
	PathParams  LandlordControllerGetSasReportPathParams
	QueryParams LandlordControllerGetSasReportQueryParams
}

type LandlordControllerGetSasReportResponse struct {
	Body        []byte
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
