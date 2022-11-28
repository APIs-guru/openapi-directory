import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupMembershipNameResponse
/** 
 * The response message for MembershipsService.LookupMembershipName.
**/
export class LookupMembershipNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
