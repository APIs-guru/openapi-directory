package shared



type SiteTypeResponse struct {
    RowCount *int32 `json:"row_count,omitempty"`
    Sitetypes []SiteType `json:"sitetypes,omitempty"`
    
}

