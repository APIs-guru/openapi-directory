package shared



type GooglePlayAnalytics struct {
    Gclid *string `json:"gclid,omitempty"`
    UtmCampaign *string `json:"utmCampaign,omitempty"`
    UtmContent *string `json:"utmContent,omitempty"`
    UtmMedium *string `json:"utmMedium,omitempty"`
    UtmSource *string `json:"utmSource,omitempty"`
    UtmTerm *string `json:"utmTerm,omitempty"`
    
}

