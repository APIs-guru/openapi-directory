import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveOrgMembershipRequest
/** 
 * The request message for OrgMembershipsService.MoveOrgMembership.
**/
export class MoveOrgMembershipRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;

  @Metadata({ data: "json, name=destinationOrgUnit" })
  destinationOrgUnit?: string;
}
