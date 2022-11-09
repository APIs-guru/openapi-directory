import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupMembershipNameResponse
/** 
 * The response message for MembershipsService.LookupMembershipName.
**/
export class LookupMembershipNameResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
