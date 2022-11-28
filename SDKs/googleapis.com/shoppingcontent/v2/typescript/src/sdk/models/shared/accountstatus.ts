import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusAccountLevelIssue } from "./accountstatusaccountlevelissue";
import { AccountStatusDataQualityIssue } from "./accountstatusdataqualityissue";
import { AccountStatusProducts } from "./accountstatusproducts";



// AccountStatus
/** 
 * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
**/
export class AccountStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountLevelIssues", elemType: AccountStatusAccountLevelIssue })
  accountLevelIssues?: AccountStatusAccountLevelIssue[];

  @SpeakeasyMetadata({ data: "json, name=dataQualityIssues", elemType: AccountStatusDataQualityIssue })
  dataQualityIssues?: AccountStatusDataQualityIssue[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: AccountStatusProducts })
  products?: AccountStatusProducts[];

  @SpeakeasyMetadata({ data: "json, name=websiteClaimed" })
  websiteClaimed?: boolean;
}
