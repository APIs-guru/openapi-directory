import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKeys } from "./apikeys";
import { AccountQuota } from "./accountquota";



// Account
/** 
 * Represents a user account
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Keys" })
  keys?: ApiKeys;

  @SpeakeasyMetadata({ data: "json, name=Quotas" })
  quotas?: AccountQuota;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
