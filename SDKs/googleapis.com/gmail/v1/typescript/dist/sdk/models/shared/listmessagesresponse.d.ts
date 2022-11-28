import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
export declare class ListMessagesResponse extends SpeakeasyBase {
    messages?: Message[];
    nextPageToken?: string;
    resultSizeEstimate?: number;
}
