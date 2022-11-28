import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Skipped = "SKIPPED",
    ValidationPassed = "VALIDATION_PASSED",
    InProgress = "IN_PROGRESS",
    Error = "ERROR"
}


// GoogleCloudDocumentaiV1beta3HumanReviewStatus
/** 
 * The status of human review on a processed document.
**/
export class GoogleCloudDocumentaiV1beta3HumanReviewStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=humanReviewOperation" })
  humanReviewOperation?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
