package shared

type LinksCreateReportSelf struct {
	Href *string `json:"href"`
}

type LinksCreateReport struct {
	Self *LinksCreateReportSelf `json:"self"`
}
