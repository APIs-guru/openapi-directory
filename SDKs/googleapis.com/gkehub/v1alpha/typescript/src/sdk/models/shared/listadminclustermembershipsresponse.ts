import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Membership } from "./membership";


// ListAdminClusterMembershipsResponse
/** 
 * Response message for the `GkeHub.ListAdminClusterMemberships` method.
**/
export class ListAdminClusterMembershipsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminClusterMemberships", elemType: shared.Membership })
  adminClusterMemberships?: Membership[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
