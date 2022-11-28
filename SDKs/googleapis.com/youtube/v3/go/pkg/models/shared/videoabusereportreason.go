package shared

// VideoAbuseReportReason
// A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
type VideoAbuseReportReason struct {
	Etag    *string                        `json:"etag,omitempty"`
	ID      *string                        `json:"id,omitempty"`
	Kind    *string                        `json:"kind,omitempty"`
	Snippet *VideoAbuseReportReasonSnippet `json:"snippet,omitempty"`
}
