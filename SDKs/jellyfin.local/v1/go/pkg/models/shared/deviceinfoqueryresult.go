package shared

type DeviceInfoQueryResult struct {
	Items            []DeviceInfo `json:"Items,omitempty"`
	StartIndex       *int32       `json:"StartIndex,omitempty"`
	TotalRecordCount *int32       `json:"TotalRecordCount,omitempty"`
}
