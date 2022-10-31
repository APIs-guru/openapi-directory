package shared

type VideoAbuseReportReasonSnippet struct {
	Label            *string                           `json:"label,omitempty"`
	SecondaryReasons []VideoAbuseReportSecondaryReason `json:"secondaryReasons,omitempty"`
}
