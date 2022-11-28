import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AnswerRecord } from "./googleclouddialogflowv2beta1answerrecord";
/**
 * Response message for AnswerRecords.ListAnswerRecords.
**/
export declare class GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse extends SpeakeasyBase {
    answerRecords?: GoogleCloudDialogflowV2beta1AnswerRecord[];
    nextPageToken?: string;
}
