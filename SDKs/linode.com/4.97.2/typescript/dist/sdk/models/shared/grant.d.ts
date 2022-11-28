import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GrantPermissionsEnum {
    ReadOnly = "read_only",
    ReadWrite = "read_write"
}
/**
 * Represents the level of access a restricted User has to a specific resource on the Account.
 *
**/
export declare class Grant extends SpeakeasyBase {
    id?: number;
    label?: string;
    permissions?: GrantPermissionsEnum;
}
/**
 * Represents the level of access a restricted User has to a specific resource on the Account.
 *
**/
export declare class GrantInput extends SpeakeasyBase {
    id?: number;
    permissions?: GrantPermissionsEnum;
}
