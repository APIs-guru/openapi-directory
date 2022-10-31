package shared



type PolicyTopicEvidence struct {
    DestinationNotCrawlable *DestinationNotCrawlableEvidence `json:"destinationNotCrawlable,omitempty"`
    DestinationNotWorking *DestinationNotWorkingEvidence `json:"destinationNotWorking,omitempty"`
    DestinationURL *DestinationURLEvidence `json:"destinationUrl,omitempty"`
    DomainCall *DomainCallEvidence `json:"domainCall,omitempty"`
    DownloadSize *DownloadSizeEvidence `json:"downloadSize,omitempty"`
    HTTPCall *HTTPCallEvidence `json:"httpCall,omitempty"`
    HTTPCookie *HTTPCookieEvidence `json:"httpCookie,omitempty"`
    
}

