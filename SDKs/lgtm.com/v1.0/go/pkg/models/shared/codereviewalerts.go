package shared

type CodereviewAlerts struct {
	Fixed *int32 `json:"fixed"`
	New   *int32 `json:"new"`
	Query *Query `json:"query"`
}
