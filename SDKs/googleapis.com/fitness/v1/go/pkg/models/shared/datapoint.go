package shared

type DataPoint struct {
	ComputationTimeMillis *string `json:"computationTimeMillis,omitempty"`
	DataTypeName          *string `json:"dataTypeName,omitempty"`
	EndTimeNanos          *string `json:"endTimeNanos,omitempty"`
	ModifiedTimeMillis    *string `json:"modifiedTimeMillis,omitempty"`
	OriginDataSourceID    *string `json:"originDataSourceId,omitempty"`
	RawTimestampNanos     *string `json:"rawTimestampNanos,omitempty"`
	StartTimeNanos        *string `json:"startTimeNanos,omitempty"`
	Value                 []Value `json:"value,omitempty"`
}
