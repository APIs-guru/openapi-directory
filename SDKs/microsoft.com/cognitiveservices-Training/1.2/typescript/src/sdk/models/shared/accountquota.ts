import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerProjectQuota } from "./perprojectquota";
import { Quota } from "./quota";
import { Quota } from "./quota";


// AccountQuota
/** 
 * Represents a set of quotas associated with an account
**/
export class AccountQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=PerProject", elemType: shared.PerProjectQuota })
  perProject?: PerProjectQuota[];

  @Metadata({ data: "json, name=Predictions" })
  predictions?: Quota;

  @Metadata({ data: "json, name=Projects" })
  projects?: Quota;

  @Metadata({ data: "json, name=Tier" })
  tier?: string;
}
