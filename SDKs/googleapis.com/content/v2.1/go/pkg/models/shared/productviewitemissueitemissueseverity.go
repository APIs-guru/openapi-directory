package shared

type ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum string

const (
	ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnumAggregatedIssueSeverityUnspecified ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum = "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED"
	ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnumDisapproved                        ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum = "DISAPPROVED"
	ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnumDemoted                            ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum = "DEMOTED"
	ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnumPending                            ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum = "PENDING"
)

type ProductViewItemIssueItemIssueSeverity struct {
	AggregatedSeverity     *ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum `json:"aggregatedSeverity"`
	SeverityPerDestination []ProductViewItemIssueIssueSeverityPerDestination            `json:"severityPerDestination"`
}
