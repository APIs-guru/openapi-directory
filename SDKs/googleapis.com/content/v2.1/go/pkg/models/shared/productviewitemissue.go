package shared

type ProductViewItemIssueResolutionEnum string

const (
	ProductViewItemIssueResolutionEnumUnknown           ProductViewItemIssueResolutionEnum = "UNKNOWN"
	ProductViewItemIssueResolutionEnumMerchantAction    ProductViewItemIssueResolutionEnum = "MERCHANT_ACTION"
	ProductViewItemIssueResolutionEnumPendingProcessing ProductViewItemIssueResolutionEnum = "PENDING_PROCESSING"
)

type ProductViewItemIssue struct {
	IssueType  *ProductViewItemIssueItemIssueType     `json:"issueType,omitempty"`
	Resolution *ProductViewItemIssueResolutionEnum    `json:"resolution,omitempty"`
	Severity   *ProductViewItemIssueItemIssueSeverity `json:"severity,omitempty"`
}
