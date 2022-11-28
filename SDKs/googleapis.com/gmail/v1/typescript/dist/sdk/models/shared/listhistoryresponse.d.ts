import { SpeakeasyBase } from "../../../internal/utils";
import { History } from "./history";
export declare class ListHistoryResponse extends SpeakeasyBase {
    history?: History[];
    historyId?: string;
    nextPageToken?: string;
}
