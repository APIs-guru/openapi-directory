import { SpeakeasyBase } from "../../../internal/utils";
import { AccountPermission } from "./accountpermission";
/**
 * Account Permission List Response
**/
export declare class AccountPermissionsListResponse extends SpeakeasyBase {
    accountPermissions?: AccountPermission[];
    kind?: string;
}
