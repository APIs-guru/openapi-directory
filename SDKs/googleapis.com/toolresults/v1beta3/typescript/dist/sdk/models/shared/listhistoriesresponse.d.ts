import { SpeakeasyBase } from "../../../internal/utils";
import { History } from "./history";
/**
 * Response message for HistoryService.List
**/
export declare class ListHistoriesResponse extends SpeakeasyBase {
    histories?: History[];
    nextPageToken?: string;
}
