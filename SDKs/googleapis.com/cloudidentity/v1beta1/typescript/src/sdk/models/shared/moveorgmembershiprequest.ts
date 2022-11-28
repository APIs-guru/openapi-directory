import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoveOrgMembershipRequest
/** 
 * The request message for OrgMembershipsService.MoveOrgMembership.
**/
export class MoveOrgMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationOrgUnit" })
  destinationOrgUnit?: string;
}
