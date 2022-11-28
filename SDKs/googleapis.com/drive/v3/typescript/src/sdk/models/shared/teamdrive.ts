import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamDriveBackgroundImageFile
/** 
 * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
export class TeamDriveBackgroundImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=xCoordinate" })
  xCoordinate?: number;

  @SpeakeasyMetadata({ data: "json, name=yCoordinate" })
  yCoordinate?: number;
}


// TeamDriveCapabilities
/** 
 * Capabilities the current user has on this Team Drive.
**/
export class TeamDriveCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canAddChildren" })
  canAddChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeCopyRequiresWriterPermissionRestriction" })
  canChangeCopyRequiresWriterPermissionRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeDomainUsersOnlyRestriction" })
  canChangeDomainUsersOnlyRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeTeamDriveBackground" })
  canChangeTeamDriveBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeTeamMembersOnlyRestriction" })
  canChangeTeamMembersOnlyRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canComment" })
  canComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCopy" })
  canCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteChildren" })
  canDeleteChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteTeamDrive" })
  canDeleteTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDownload" })
  canDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEdit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canListChildren" })
  canListChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canManageMembers" })
  canManageMembers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canReadRevisions" })
  canReadRevisions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRemoveChildren" })
  canRemoveChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRename" })
  canRename?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRenameTeamDrive" })
  canRenameTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canResetTeamDriveRestrictions" })
  canResetTeamDriveRestrictions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canShare" })
  canShare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canTrashChildren" })
  canTrashChildren?: boolean;
}


// TeamDriveRestrictions
/** 
 * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
**/
export class TeamDriveRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminManagedRestrictions" })
  adminManagedRestrictions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domainUsersOnly" })
  domainUsersOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=teamMembersOnly" })
  teamMembersOnly?: boolean;
}


// TeamDrive
/** 
 * Deprecated: use the drive collection instead.
**/
export class TeamDrive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundImageFile" })
  backgroundImageFile?: TeamDriveBackgroundImageFile;

  @SpeakeasyMetadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: TeamDriveCapabilities;

  @SpeakeasyMetadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: TeamDriveRestrictions;

  @SpeakeasyMetadata({ data: "json, name=themeId" })
  themeId?: string;
}
