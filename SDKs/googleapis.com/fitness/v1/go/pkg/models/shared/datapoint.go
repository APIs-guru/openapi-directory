package shared

type DataPoint struct {
	ComputationTimeMillis *string `json:"computationTimeMillis"`
	DataTypeName          *string `json:"dataTypeName"`
	EndTimeNanos          *string `json:"endTimeNanos"`
	ModifiedTimeMillis    *string `json:"modifiedTimeMillis"`
	OriginDataSourceID    *string `json:"originDataSourceId"`
	RawTimestampNanos     *string `json:"rawTimestampNanos"`
	StartTimeNanos        *string `json:"startTimeNanos"`
	Value                 []Value `json:"value"`
}
