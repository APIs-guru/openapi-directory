package shared

type PolicyTopicEvidence struct {
	DestinationNotCrawlable *DestinationNotCrawlableEvidence `json:"destinationNotCrawlable"`
	DestinationNotWorking   *DestinationNotWorkingEvidence   `json:"destinationNotWorking"`
	DestinationURL          *DestinationURLEvidence          `json:"destinationUrl"`
	DomainCall              *DomainCallEvidence              `json:"domainCall"`
	DownloadSize            *DownloadSizeEvidence            `json:"downloadSize"`
	HTTPCall                *HTTPCallEvidence                `json:"httpCall"`
	HTTPCookie              *HTTPCookieEvidence              `json:"httpCookie"`
}
