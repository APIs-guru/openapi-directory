import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusAccountLevelIssue } from "./accountstatusaccountlevelissue";
import { AccountStatusDataQualityIssue } from "./accountstatusdataqualityissue";
import { AccountStatusProducts } from "./accountstatusproducts";
/**
 * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
**/
export declare class AccountStatus extends SpeakeasyBase {
    accountId?: string;
    accountLevelIssues?: AccountStatusAccountLevelIssue[];
    dataQualityIssues?: AccountStatusDataQualityIssue[];
    kind?: string;
    products?: AccountStatusProducts[];
    websiteClaimed?: boolean;
}
