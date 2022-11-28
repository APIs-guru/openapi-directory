import { SpeakeasyBase } from "../../../internal/utils";
export declare class PermissionPermissionDetails extends SpeakeasyBase {
    inherited?: boolean;
    inheritedFrom?: string;
    permissionType?: string;
    role?: string;
}
export declare class PermissionTeamDrivePermissionDetails extends SpeakeasyBase {
    inherited?: boolean;
    inheritedFrom?: string;
    role?: string;
    teamDrivePermissionType?: string;
}
/**
 * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
**/
export declare class Permission extends SpeakeasyBase {
    allowFileDiscovery?: boolean;
    deleted?: boolean;
    displayName?: string;
    domain?: string;
    emailAddress?: string;
    expirationTime?: Date;
    id?: string;
    kind?: string;
    pendingOwner?: boolean;
    permissionDetails?: PermissionPermissionDetails[];
    photoLink?: string;
    role?: string;
    teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];
    type?: string;
    view?: string;
}
/**
 * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
**/
export declare class PermissionInput extends SpeakeasyBase {
    allowFileDiscovery?: boolean;
    deleted?: boolean;
    displayName?: string;
    domain?: string;
    emailAddress?: string;
    expirationTime?: Date;
    id?: string;
    kind?: string;
    pendingOwner?: boolean;
    photoLink?: string;
    role?: string;
    type?: string;
    view?: string;
}
