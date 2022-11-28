package shared

// EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue
// The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. See go/eventbus-alert-config-examples
type EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue struct {
	Absolute   *string `json:"absolute,omitempty"`
	Percentage *int32  `json:"percentage,omitempty"`
}
