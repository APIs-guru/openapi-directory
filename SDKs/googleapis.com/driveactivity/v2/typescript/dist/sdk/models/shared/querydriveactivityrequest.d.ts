import { SpeakeasyBase } from "../../../internal/utils";
import { ConsolidationStrategy } from "./consolidationstrategy";
/**
 * The request message for querying Drive activity.
**/
export declare class QueryDriveActivityRequest extends SpeakeasyBase {
    ancestorName?: string;
    consolidationStrategy?: ConsolidationStrategy;
    filter?: string;
    itemName?: string;
    pageSize?: number;
    pageToken?: string;
}
