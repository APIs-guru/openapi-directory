import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatusError } from "./datafeedstatuserror";
/**
 * The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
**/
export declare class DatafeedStatus extends SpeakeasyBase {
    country?: string;
    datafeedId?: string;
    errors?: DatafeedStatusError[];
    itemsTotal?: string;
    itemsValid?: string;
    kind?: string;
    language?: string;
    lastUploadDate?: string;
    processingStatus?: string;
    warnings?: DatafeedStatusError[];
}
