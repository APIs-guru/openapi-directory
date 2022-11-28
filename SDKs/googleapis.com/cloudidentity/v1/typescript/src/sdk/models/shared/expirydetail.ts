import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpiryDetail
/** 
 * The `MembershipRole` expiry details.
**/
export class ExpiryDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
