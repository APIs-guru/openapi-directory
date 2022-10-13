package shared

type ListReportTypesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	ReportTypes   []ReportType `json:"reportTypes"`
}
