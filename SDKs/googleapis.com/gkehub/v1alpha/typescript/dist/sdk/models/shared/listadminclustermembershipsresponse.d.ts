import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * Response message for the `GkeHub.ListAdminClusterMemberships` method.
**/
export declare class ListAdminClusterMembershipsResponse extends SpeakeasyBase {
    adminClusterMemberships?: Membership[];
    nextPageToken?: string;
    unreachable?: string[];
}
