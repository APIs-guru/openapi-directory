import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Membership } from "./membership";


// ListMembershipsResponse
/** 
 * Response message for the `GkeHub.ListMemberships` method.
**/
export class ListMembershipsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Membership })
  resources?: Membership[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
