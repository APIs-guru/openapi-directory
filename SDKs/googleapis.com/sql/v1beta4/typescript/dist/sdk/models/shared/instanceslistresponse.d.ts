import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInstance } from "./databaseinstance";
import { ApiWarning } from "./apiwarning";
/**
 * Database instances list response.
**/
export declare class InstancesListResponse extends SpeakeasyBase {
    items?: DatabaseInstance[];
    kind?: string;
    nextPageToken?: string;
    warnings?: ApiWarning[];
}
