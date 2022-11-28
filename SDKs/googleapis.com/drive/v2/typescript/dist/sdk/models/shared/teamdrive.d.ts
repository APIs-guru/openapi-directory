import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
export declare class TeamDriveBackgroundImageFile extends SpeakeasyBase {
    id?: string;
    width?: number;
    xCoordinate?: number;
    yCoordinate?: number;
}
/**
 * Capabilities the current user has on this Team Drive.
**/
export declare class TeamDriveCapabilities extends SpeakeasyBase {
    canAddChildren?: boolean;
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    canChangeDomainUsersOnlyRestriction?: boolean;
    canChangeTeamDriveBackground?: boolean;
    canChangeTeamMembersOnlyRestriction?: boolean;
    canComment?: boolean;
    canCopy?: boolean;
    canDeleteChildren?: boolean;
    canDeleteTeamDrive?: boolean;
    canDownload?: boolean;
    canEdit?: boolean;
    canListChildren?: boolean;
    canManageMembers?: boolean;
    canReadRevisions?: boolean;
    canRemoveChildren?: boolean;
    canRename?: boolean;
    canRenameTeamDrive?: boolean;
    canResetTeamDriveRestrictions?: boolean;
    canShare?: boolean;
    canTrashChildren?: boolean;
}
/**
 * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
**/
export declare class TeamDriveRestrictions extends SpeakeasyBase {
    adminManagedRestrictions?: boolean;
    copyRequiresWriterPermission?: boolean;
    domainUsersOnly?: boolean;
    teamMembersOnly?: boolean;
}
/**
 * Deprecated: use the drive collection instead.
**/
export declare class TeamDrive extends SpeakeasyBase {
    backgroundImageFile?: TeamDriveBackgroundImageFile;
    backgroundImageLink?: string;
    capabilities?: TeamDriveCapabilities;
    colorRgb?: string;
    createdDate?: Date;
    id?: string;
    kind?: string;
    name?: string;
    orgUnitId?: string;
    restrictions?: TeamDriveRestrictions;
    themeId?: string;
}
