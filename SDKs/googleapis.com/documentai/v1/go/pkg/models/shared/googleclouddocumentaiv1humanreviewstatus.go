package shared

type GoogleCloudDocumentaiV1HumanReviewStatusStateEnum string

const (
	GoogleCloudDocumentaiV1HumanReviewStatusStateEnumStateUnspecified GoogleCloudDocumentaiV1HumanReviewStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDocumentaiV1HumanReviewStatusStateEnumSkipped          GoogleCloudDocumentaiV1HumanReviewStatusStateEnum = "SKIPPED"
	GoogleCloudDocumentaiV1HumanReviewStatusStateEnumValidationPassed GoogleCloudDocumentaiV1HumanReviewStatusStateEnum = "VALIDATION_PASSED"
	GoogleCloudDocumentaiV1HumanReviewStatusStateEnumInProgress       GoogleCloudDocumentaiV1HumanReviewStatusStateEnum = "IN_PROGRESS"
	GoogleCloudDocumentaiV1HumanReviewStatusStateEnumError            GoogleCloudDocumentaiV1HumanReviewStatusStateEnum = "ERROR"
)

type GoogleCloudDocumentaiV1HumanReviewStatus struct {
	HumanReviewOperation *string                                            `json:"humanReviewOperation"`
	State                *GoogleCloudDocumentaiV1HumanReviewStatusStateEnum `json:"state"`
	StateMessage         *string                                            `json:"stateMessage"`
}
