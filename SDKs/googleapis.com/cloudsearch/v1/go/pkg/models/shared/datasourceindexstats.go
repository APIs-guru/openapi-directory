package shared



type DataSourceIndexStats struct {
    Date *Date `json:"date,omitempty"`
    ItemCountByStatus []ItemCountByStatus `json:"itemCountByStatus,omitempty"`
    
}

