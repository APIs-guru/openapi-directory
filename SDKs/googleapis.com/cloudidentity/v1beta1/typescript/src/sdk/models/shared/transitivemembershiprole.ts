import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransitiveMembershipRole
/** 
 * Message representing the role of a TransitiveMembership.
**/
export class TransitiveMembershipRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
