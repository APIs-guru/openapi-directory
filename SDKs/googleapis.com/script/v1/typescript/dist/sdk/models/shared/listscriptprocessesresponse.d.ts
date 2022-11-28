import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeProcess } from "./googleappsscripttypeprocess";
/**
 * Response with the list of Process resources.
**/
export declare class ListScriptProcessesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processes?: GoogleAppsScriptTypeProcess[];
}
