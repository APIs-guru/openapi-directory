import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
import { ContainerAccess } from "./containeraccess";
/**
 * Represents a user's permissions to an account and its container.
**/
export declare class UserPermission extends SpeakeasyBase {
    accountAccess?: AccountAccess;
    accountId?: string;
    containerAccess?: ContainerAccess[];
    emailAddress?: string;
    path?: string;
}
