import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";



// ListAdminClusterMembershipsResponse
/** 
 * Response message for the `GkeHub.ListAdminClusterMemberships` method.
**/
export class ListAdminClusterMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminClusterMemberships", elemType: Membership })
  adminClusterMemberships?: Membership[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
