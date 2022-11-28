import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * A list of permissions associated with a file.
**/
export declare class PermissionList extends SpeakeasyBase {
    etag?: string;
    items?: Permission[];
    kind?: string;
    nextPageToken?: string;
    selfLink?: string;
}
