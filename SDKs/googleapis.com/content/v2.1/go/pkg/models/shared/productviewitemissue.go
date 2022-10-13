package shared

type ProductViewItemIssueResolutionEnum string

const (
	ProductViewItemIssueResolutionEnumUnknown           ProductViewItemIssueResolutionEnum = "UNKNOWN"
	ProductViewItemIssueResolutionEnumMerchantAction    ProductViewItemIssueResolutionEnum = "MERCHANT_ACTION"
	ProductViewItemIssueResolutionEnumPendingProcessing ProductViewItemIssueResolutionEnum = "PENDING_PROCESSING"
)

type ProductViewItemIssue struct {
	IssueType  *ProductViewItemIssueItemIssueType     `json:"issueType"`
	Resolution *ProductViewItemIssueResolutionEnum    `json:"resolution"`
	Severity   *ProductViewItemIssueItemIssueSeverity `json:"severity"`
}
