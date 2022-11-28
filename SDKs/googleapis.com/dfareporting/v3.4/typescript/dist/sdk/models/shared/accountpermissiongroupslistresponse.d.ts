import { SpeakeasyBase } from "../../../internal/utils";
import { AccountPermissionGroup } from "./accountpermissiongroup";
/**
 * Account Permission Group List Response
**/
export declare class AccountPermissionGroupsListResponse extends SpeakeasyBase {
    accountPermissionGroups?: AccountPermissionGroup[];
    kind?: string;
}
