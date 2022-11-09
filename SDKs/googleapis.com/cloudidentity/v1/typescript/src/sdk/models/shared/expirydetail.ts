import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExpiryDetail
/** 
 * The `MembershipRole` expiry details.
**/
export class ExpiryDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
