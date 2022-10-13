package shared

type RefreshDataSourceRequest struct {
	DataSourceID *string                     `json:"dataSourceId"`
	Force        *bool                       `json:"force"`
	IsAll        *bool                       `json:"isAll"`
	References   *DataSourceObjectReferences `json:"references"`
}
