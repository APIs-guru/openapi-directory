import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusAccountLevelIssue } from "./accountstatusaccountlevelissue";
import { AccountStatusProducts } from "./accountstatusproducts";



// AccountStatus
/** 
 * The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.
**/
export class AccountStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountLevelIssues", elemType: AccountStatusAccountLevelIssue })
  accountLevelIssues?: AccountStatusAccountLevelIssue[];

  @SpeakeasyMetadata({ data: "json, name=accountManagement" })
  accountManagement?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: AccountStatusProducts })
  products?: AccountStatusProducts[];

  @SpeakeasyMetadata({ data: "json, name=websiteClaimed" })
  websiteClaimed?: boolean;
}
