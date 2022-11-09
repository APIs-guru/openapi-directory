import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2AnswerRecord } from "./googleclouddialogflowv2answerrecord";


// GoogleCloudDialogflowV2ListAnswerRecordsResponse
/** 
 * Response message for AnswerRecords.ListAnswerRecords.
**/
export class GoogleCloudDialogflowV2ListAnswerRecordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRecords", elemType: shared.GoogleCloudDialogflowV2AnswerRecord })
  answerRecords?: GoogleCloudDialogflowV2AnswerRecord[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
