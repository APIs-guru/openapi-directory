import { SpeakeasyBase } from "../../../internal/utils";
import { Thread } from "./thread";
export declare class ListThreadsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resultSizeEstimate?: number;
    threads?: Thread[];
}
