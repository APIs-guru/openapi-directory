import { SpeakeasyBase } from "../../../internal/utils";
export declare class PermissionPermissionDetails extends SpeakeasyBase {
    additionalRoles?: string[];
    inherited?: boolean;
    inheritedFrom?: string;
    permissionType?: string;
    role?: string;
}
export declare class PermissionTeamDrivePermissionDetails extends SpeakeasyBase {
    additionalRoles?: string[];
    inherited?: boolean;
    inheritedFrom?: string;
    role?: string;
    teamDrivePermissionType?: string;
}
/**
 * A permission for a file.
**/
export declare class Permission extends SpeakeasyBase {
    additionalRoles?: string[];
    authKey?: string;
    deleted?: boolean;
    domain?: string;
    emailAddress?: string;
    etag?: string;
    expirationDate?: Date;
    id?: string;
    kind?: string;
    name?: string;
    pendingOwner?: boolean;
    permissionDetails?: PermissionPermissionDetails[];
    photoLink?: string;
    role?: string;
    selfLink?: string;
    teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];
    type?: string;
    value?: string;
    view?: string;
    withLink?: boolean;
}
/**
 * A permission for a file.
**/
export declare class PermissionInput extends SpeakeasyBase {
    additionalRoles?: string[];
    authKey?: string;
    deleted?: boolean;
    domain?: string;
    emailAddress?: string;
    etag?: string;
    expirationDate?: Date;
    id?: string;
    kind?: string;
    name?: string;
    pendingOwner?: boolean;
    photoLink?: string;
    role?: string;
    selfLink?: string;
    type?: string;
    value?: string;
    view?: string;
    withLink?: boolean;
}
