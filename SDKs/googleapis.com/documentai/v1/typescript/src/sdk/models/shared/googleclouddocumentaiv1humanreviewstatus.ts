import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDocumentaiV1HumanReviewStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Skipped = "SKIPPED"
,    ValidationPassed = "VALIDATION_PASSED"
,    InProgress = "IN_PROGRESS"
,    Error = "ERROR"
}


// GoogleCloudDocumentaiV1HumanReviewStatus
/** 
 * The status of human review on a processed document.
**/
export class GoogleCloudDocumentaiV1HumanReviewStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=humanReviewOperation" })
  humanReviewOperation?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1HumanReviewStatusStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
