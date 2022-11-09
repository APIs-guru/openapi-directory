import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1AnswerRecord } from "./googleclouddialogflowv2beta1answerrecord";


// GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse
/** 
 * Response message for AnswerRecords.ListAnswerRecords.
**/
export class GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRecords", elemType: shared.GoogleCloudDialogflowV2beta1AnswerRecord })
  answerRecords?: GoogleCloudDialogflowV2beta1AnswerRecord[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
