import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * The response containing permissions which can be tested on a resource.
**/
export declare class QueryTestablePermissionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    permissions?: Permission[];
}
