import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerProjectQuota } from "./perprojectquota";
import { Quota } from "./quota";



// AccountQuota
/** 
 * Represents a set of quotas associated with an account
**/
export class AccountQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PerProject", elemType: PerProjectQuota })
  perProject?: PerProjectQuota[];

  @SpeakeasyMetadata({ data: "json, name=Predictions" })
  predictions?: Quota;

  @SpeakeasyMetadata({ data: "json, name=Projects" })
  projects?: Quota;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: string;
}
