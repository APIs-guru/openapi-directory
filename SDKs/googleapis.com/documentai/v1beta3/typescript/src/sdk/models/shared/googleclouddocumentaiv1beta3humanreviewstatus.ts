import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Skipped = "SKIPPED"
,    ValidationPassed = "VALIDATION_PASSED"
,    InProgress = "IN_PROGRESS"
,    Error = "ERROR"
}


// GoogleCloudDocumentaiV1beta3HumanReviewStatus
/** 
 * The status of human review on a processed document.
**/
export class GoogleCloudDocumentaiV1beta3HumanReviewStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=humanReviewOperation" })
  humanReviewOperation?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
