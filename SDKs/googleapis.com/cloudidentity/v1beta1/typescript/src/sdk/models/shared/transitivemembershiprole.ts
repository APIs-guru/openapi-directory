import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransitiveMembershipRole
/** 
 * Message representing the role of a TransitiveMembership.
**/
export class TransitiveMembershipRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role?: string;
}
