import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AnswerRecord } from "./googleclouddialogflowv2answerrecord";
/**
 * Response message for AnswerRecords.ListAnswerRecords.
**/
export declare class GoogleCloudDialogflowV2ListAnswerRecordsResponse extends SpeakeasyBase {
    answerRecords?: GoogleCloudDialogflowV2AnswerRecord[];
    nextPageToken?: string;
}
