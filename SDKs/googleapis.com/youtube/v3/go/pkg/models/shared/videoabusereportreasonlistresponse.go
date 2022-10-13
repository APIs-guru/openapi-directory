package shared

type VideoAbuseReportReasonListResponse struct {
	Etag      *string                  `json:"etag"`
	EventID   *string                  `json:"eventId"`
	Items     []VideoAbuseReportReason `json:"items"`
	Kind      *string                  `json:"kind"`
	VisitorID *string                  `json:"visitorId"`
}
