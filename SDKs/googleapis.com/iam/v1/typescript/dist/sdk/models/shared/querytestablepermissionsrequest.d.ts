import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to get permissions which can be tested on a resource.
**/
export declare class QueryTestablePermissionsRequest extends SpeakeasyBase {
    fullResourceName?: string;
    pageSize?: number;
    pageToken?: string;
}
