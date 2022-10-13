package shared

type AuthenticationInfoQueryResult struct {
	Items            []AuthenticationInfo `json:"Items"`
	StartIndex       *int32               `json:"StartIndex"`
	TotalRecordCount *int32               `json:"TotalRecordCount"`
}
