package shared

type DeviceInfoQueryResult struct {
	Items            []DeviceInfo `json:"Items"`
	StartIndex       *int32       `json:"StartIndex"`
	TotalRecordCount *int32       `json:"TotalRecordCount"`
}
