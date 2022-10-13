package operations

type LandlordControllerGetTenancyAgreementReportPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetTenancyAgreementReportQueryParams struct {
	TenancyID string `queryParam:"style=form,explode=true,name=tenancyID"`
	Token     string `queryParam:"style=form,explode=true,name=token"`
}

type LandlordControllerGetTenancyAgreementReportRequest struct {
	PathParams  LandlordControllerGetTenancyAgreementReportPathParams
	QueryParams LandlordControllerGetTenancyAgreementReportQueryParams
}

type LandlordControllerGetTenancyAgreementReportResponse struct {
	Body        []byte
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
