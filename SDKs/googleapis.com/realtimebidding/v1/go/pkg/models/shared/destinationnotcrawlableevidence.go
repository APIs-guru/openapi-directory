package shared

type DestinationNotCrawlableEvidenceReasonEnum string

const (
	DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified DestinationNotCrawlableEvidenceReasonEnum = "REASON_UNSPECIFIED"
	DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots DestinationNotCrawlableEvidenceReasonEnum = "UNREACHABLE_ROBOTS"
	DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots     DestinationNotCrawlableEvidenceReasonEnum = "TIMEOUT_ROBOTS"
	DestinationNotCrawlableEvidenceReasonEnumRobotedDenied     DestinationNotCrawlableEvidenceReasonEnum = "ROBOTED_DENIED"
	DestinationNotCrawlableEvidenceReasonEnumUnknown           DestinationNotCrawlableEvidenceReasonEnum = "UNKNOWN"
)

// DestinationNotCrawlableEvidence
// Evidence that the creative's destination URL was not crawlable by Google.
type DestinationNotCrawlableEvidence struct {
	CrawlTime  *string                                    `json:"crawlTime,omitempty"`
	CrawledURL *string                                    `json:"crawledUrl,omitempty"`
	Reason     *DestinationNotCrawlableEvidenceReasonEnum `json:"reason,omitempty"`
}
