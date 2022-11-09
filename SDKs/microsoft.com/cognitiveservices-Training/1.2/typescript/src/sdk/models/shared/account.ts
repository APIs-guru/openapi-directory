import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiKeys } from "./apikeys";
import { AccountQuota } from "./accountquota";


// Account
/** 
 * Represents a user account
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Keys" })
  keys?: ApiKeys;

  @Metadata({ data: "json, name=Quotas" })
  quotas?: AccountQuota;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
