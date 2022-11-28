import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AnswerRecord } from "./googleclouddialogflowv2answerrecord";



// GoogleCloudDialogflowV2ListAnswerRecordsResponse
/** 
 * Response message for AnswerRecords.ListAnswerRecords.
**/
export class GoogleCloudDialogflowV2ListAnswerRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRecords", elemType: GoogleCloudDialogflowV2AnswerRecord })
  answerRecords?: GoogleCloudDialogflowV2AnswerRecord[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
