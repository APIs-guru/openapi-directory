package shared

type VideoAbuseReportReasonSnippet struct {
	Label            *string                           `json:"label"`
	SecondaryReasons []VideoAbuseReportSecondaryReason `json:"secondaryReasons"`
}
