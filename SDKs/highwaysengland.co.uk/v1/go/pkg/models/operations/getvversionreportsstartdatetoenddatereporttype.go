package operations

type GetVVersionReportsStartDateToEndDateReportTypePathParams struct {
	EndDate    string `pathParam:"style=simple,explode=false,name=end_date"`
	ReportType string `pathParam:"style=simple,explode=false,name=report_type"`
	StartDate  string `pathParam:"style=simple,explode=false,name=start_date"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type GetVVersionReportsStartDateToEndDateReportTypeQueryParams struct {
	Page            int32  `queryParam:"style=form,explode=true,name=page"`
	PageSize        int32  `queryParam:"style=form,explode=true,name=page_size"`
	ReportSubTypeID *int32 `queryParam:"style=form,explode=true,name=reportSubTypeId"`
	Sites           string `queryParam:"style=form,explode=true,name=sites"`
}

type GetVVersionReportsStartDateToEndDateReportTypeRequest struct {
	PathParams  GetVVersionReportsStartDateToEndDateReportTypePathParams
	QueryParams GetVVersionReportsStartDateToEndDateReportTypeQueryParams
}

type GetVVersionReportsStartDateToEndDateReportTypeResponse struct {
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
