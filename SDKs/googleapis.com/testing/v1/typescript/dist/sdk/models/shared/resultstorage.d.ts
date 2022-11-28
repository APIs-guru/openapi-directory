import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudStorage } from "./googlecloudstorage";
import { ToolResultsExecution } from "./toolresultsexecution";
import { ToolResultsHistory } from "./toolresultshistory";
/**
 * Locations where the results of running the test are stored.
**/
export declare class ResultStorage extends SpeakeasyBase {
    googleCloudStorage?: GoogleCloudStorage;
    resultsUrl?: string;
    toolResultsExecution?: ToolResultsExecution;
    toolResultsHistory?: ToolResultsHistory;
}
