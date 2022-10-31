package shared

type KeyUsageDailyCountEpoch struct {
	Count *int32  `json:"count,omitempty"`
	Date  *string `json:"date,omitempty"`
}
