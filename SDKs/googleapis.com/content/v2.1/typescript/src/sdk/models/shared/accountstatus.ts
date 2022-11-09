import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountStatusAccountLevelIssue } from "./accountstatusaccountlevelissue";
import { AccountStatusProducts } from "./accountstatusproducts";


// AccountStatus
/** 
 * The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.
**/
export class AccountStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=accountLevelIssues", elemType: shared.AccountStatusAccountLevelIssue })
  accountLevelIssues?: AccountStatusAccountLevelIssue[];

  @Metadata({ data: "json, name=accountManagement" })
  accountManagement?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=products", elemType: shared.AccountStatusProducts })
  products?: AccountStatusProducts[];

  @Metadata({ data: "json, name=websiteClaimed" })
  websiteClaimed?: boolean;
}
