package shared

// VideoAbuseReportReasonSnippet
// Basic details about a video category, such as its localized title.
type VideoAbuseReportReasonSnippet struct {
	Label            *string                           `json:"label,omitempty"`
	SecondaryReasons []VideoAbuseReportSecondaryReason `json:"secondaryReasons,omitempty"`
}
