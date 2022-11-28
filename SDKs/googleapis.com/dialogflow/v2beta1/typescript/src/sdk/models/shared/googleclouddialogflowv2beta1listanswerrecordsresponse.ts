import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AnswerRecord } from "./googleclouddialogflowv2beta1answerrecord";



// GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse
/** 
 * Response message for AnswerRecords.ListAnswerRecords.
**/
export class GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRecords", elemType: GoogleCloudDialogflowV2beta1AnswerRecord })
  answerRecords?: GoogleCloudDialogflowV2beta1AnswerRecord[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
