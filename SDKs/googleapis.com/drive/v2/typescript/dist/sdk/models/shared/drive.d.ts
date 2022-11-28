import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
export declare class DriveBackgroundImageFile extends SpeakeasyBase {
    id?: string;
    width?: number;
    xCoordinate?: number;
    yCoordinate?: number;
}
/**
 * Capabilities the current user has on this shared drive.
**/
export declare class DriveCapabilities extends SpeakeasyBase {
    canAddChildren?: boolean;
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    canChangeDomainUsersOnlyRestriction?: boolean;
    canChangeDriveBackground?: boolean;
    canChangeDriveMembersOnlyRestriction?: boolean;
    canComment?: boolean;
    canCopy?: boolean;
    canDeleteChildren?: boolean;
    canDeleteDrive?: boolean;
    canDownload?: boolean;
    canEdit?: boolean;
    canListChildren?: boolean;
    canManageMembers?: boolean;
    canReadRevisions?: boolean;
    canRename?: boolean;
    canRenameDrive?: boolean;
    canResetDriveRestrictions?: boolean;
    canShare?: boolean;
    canTrashChildren?: boolean;
}
/**
 * A set of restrictions that apply to this shared drive or items inside this shared drive.
**/
export declare class DriveRestrictions extends SpeakeasyBase {
    adminManagedRestrictions?: boolean;
    copyRequiresWriterPermission?: boolean;
    domainUsersOnly?: boolean;
    driveMembersOnly?: boolean;
}
/**
 * Representation of a shared drive.
**/
export declare class Drive extends SpeakeasyBase {
    backgroundImageFile?: DriveBackgroundImageFile;
    backgroundImageLink?: string;
    capabilities?: DriveCapabilities;
    colorRgb?: string;
    createdDate?: Date;
    hidden?: boolean;
    id?: string;
    kind?: string;
    name?: string;
    orgUnitId?: string;
    restrictions?: DriveRestrictions;
    themeId?: string;
}
