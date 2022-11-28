import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Skipped = "SKIPPED",
    ValidationPassed = "VALIDATION_PASSED",
    InProgress = "IN_PROGRESS",
    Error = "ERROR"
}
/**
 * The status of human review on a processed document.
**/
export declare class GoogleCloudDocumentaiV1beta3HumanReviewStatus extends SpeakeasyBase {
    humanReviewOperation?: string;
    state?: GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum;
    stateMessage?: string;
}
