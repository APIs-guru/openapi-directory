package shared



type RefreshDataSourceRequest struct {
    DataSourceID *string `json:"dataSourceId,omitempty"`
    Force *bool `json:"force,omitempty"`
    IsAll *bool `json:"isAll,omitempty"`
    References *DataSourceObjectReferences `json:"references,omitempty"`
    
}

