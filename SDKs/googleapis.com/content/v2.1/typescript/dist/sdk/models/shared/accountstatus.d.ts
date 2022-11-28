import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusAccountLevelIssue } from "./accountstatusaccountlevelissue";
import { AccountStatusProducts } from "./accountstatusproducts";
/**
 * The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.
**/
export declare class AccountStatus extends SpeakeasyBase {
    accountId?: string;
    accountLevelIssues?: AccountStatusAccountLevelIssue[];
    accountManagement?: string;
    kind?: string;
    products?: AccountStatusProducts[];
    websiteClaimed?: boolean;
}
