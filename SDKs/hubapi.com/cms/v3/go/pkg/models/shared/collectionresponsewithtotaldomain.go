package shared



type CollectionResponseWithTotalDomain struct {
    Paging *Paging `json:"paging,omitempty"`
    Results []Domain `json:"results"`
    Total int32 `json:"total"`
    
}

