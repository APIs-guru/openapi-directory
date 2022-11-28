import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDocumentaiV1HumanReviewStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Skipped = "SKIPPED",
    ValidationPassed = "VALIDATION_PASSED",
    InProgress = "IN_PROGRESS",
    Error = "ERROR"
}


// GoogleCloudDocumentaiV1HumanReviewStatus
/** 
 * The status of human review on a processed document.
**/
export class GoogleCloudDocumentaiV1HumanReviewStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=humanReviewOperation" })
  humanReviewOperation?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1HumanReviewStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
