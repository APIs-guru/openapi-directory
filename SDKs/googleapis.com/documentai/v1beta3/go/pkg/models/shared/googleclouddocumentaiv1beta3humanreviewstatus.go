package shared

type GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum string

const (
	GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnumStateUnspecified GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnumSkipped          GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum = "SKIPPED"
	GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnumValidationPassed GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum = "VALIDATION_PASSED"
	GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnumInProgress       GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum = "IN_PROGRESS"
	GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnumError            GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum = "ERROR"
)

type GoogleCloudDocumentaiV1beta3HumanReviewStatus struct {
	HumanReviewOperation *string                                                 `json:"humanReviewOperation"`
	State                *GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum `json:"state"`
	StateMessage         *string                                                 `json:"stateMessage"`
}
