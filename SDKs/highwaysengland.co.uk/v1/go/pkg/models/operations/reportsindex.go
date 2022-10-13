package operations

type ReportsIndexPathParams struct {
	ReportType string `pathParam:"style=simple,explode=false,name=report_type"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type ReportsIndexQueryParams struct {
	EndDate         string `queryParam:"style=form,explode=true,name=end_date"`
	Page            int32  `queryParam:"style=form,explode=true,name=page"`
	PageSize        int32  `queryParam:"style=form,explode=true,name=page_size"`
	ReportSubTypeID *int32 `queryParam:"style=form,explode=true,name=reportSubTypeId"`
	Sites           string `queryParam:"style=form,explode=true,name=sites"`
	StartDate       string `queryParam:"style=form,explode=true,name=start_date"`
}

type ReportsIndexRequest struct {
	PathParams  ReportsIndexPathParams
	QueryParams ReportsIndexQueryParams
}

type ReportsIndexResponse struct {
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
