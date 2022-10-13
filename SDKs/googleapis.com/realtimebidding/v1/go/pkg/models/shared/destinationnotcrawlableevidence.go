package shared

type DestinationNotCrawlableEvidenceReasonEnum string

const (
	DestinationNotCrawlableEvidenceReasonEnumReasonUnspecified DestinationNotCrawlableEvidenceReasonEnum = "REASON_UNSPECIFIED"
	DestinationNotCrawlableEvidenceReasonEnumUnreachableRobots DestinationNotCrawlableEvidenceReasonEnum = "UNREACHABLE_ROBOTS"
	DestinationNotCrawlableEvidenceReasonEnumTimeoutRobots     DestinationNotCrawlableEvidenceReasonEnum = "TIMEOUT_ROBOTS"
	DestinationNotCrawlableEvidenceReasonEnumRobotedDenied     DestinationNotCrawlableEvidenceReasonEnum = "ROBOTED_DENIED"
	DestinationNotCrawlableEvidenceReasonEnumUnknown           DestinationNotCrawlableEvidenceReasonEnum = "UNKNOWN"
)

type DestinationNotCrawlableEvidence struct {
	CrawlTime  *string                                    `json:"crawlTime"`
	CrawledURL *string                                    `json:"crawledUrl"`
	Reason     *DestinationNotCrawlableEvidenceReasonEnum `json:"reason"`
}
