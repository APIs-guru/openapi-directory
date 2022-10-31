package shared



type PriceList struct {
    Labels []Label `json:"labels,omitempty"`
    PriceListID *string `json:"priceListId,omitempty"`
    Sections []Section `json:"sections,omitempty"`
    SourceURL *string `json:"sourceUrl,omitempty"`
    
}

