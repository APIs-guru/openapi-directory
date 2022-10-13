package shared

type LinksDownloadReport struct {
	Href *string `json:"href"`
}

type LinksSelf struct {
	Href *string `json:"href"`
}

type Links struct {
	DownloadReport *LinksDownloadReport `json:"download_report"`
	Self           *LinksSelf           `json:"self"`
}
