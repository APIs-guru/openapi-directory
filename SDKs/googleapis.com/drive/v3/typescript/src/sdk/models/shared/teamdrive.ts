import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamDriveBackgroundImageFile
/** 
 * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
export class TeamDriveBackgroundImageFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;

  @Metadata({ data: "json, name=xCoordinate" })
  xCoordinate?: number;

  @Metadata({ data: "json, name=yCoordinate" })
  yCoordinate?: number;
}


// TeamDriveCapabilities
/** 
 * Capabilities the current user has on this Team Drive.
**/
export class TeamDriveCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canAddChildren" })
  canAddChildren?: boolean;

  @Metadata({ data: "json, name=canChangeCopyRequiresWriterPermissionRestriction" })
  canChangeCopyRequiresWriterPermissionRestriction?: boolean;

  @Metadata({ data: "json, name=canChangeDomainUsersOnlyRestriction" })
  canChangeDomainUsersOnlyRestriction?: boolean;

  @Metadata({ data: "json, name=canChangeTeamDriveBackground" })
  canChangeTeamDriveBackground?: boolean;

  @Metadata({ data: "json, name=canChangeTeamMembersOnlyRestriction" })
  canChangeTeamMembersOnlyRestriction?: boolean;

  @Metadata({ data: "json, name=canComment" })
  canComment?: boolean;

  @Metadata({ data: "json, name=canCopy" })
  canCopy?: boolean;

  @Metadata({ data: "json, name=canDeleteChildren" })
  canDeleteChildren?: boolean;

  @Metadata({ data: "json, name=canDeleteTeamDrive" })
  canDeleteTeamDrive?: boolean;

  @Metadata({ data: "json, name=canDownload" })
  canDownload?: boolean;

  @Metadata({ data: "json, name=canEdit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=canListChildren" })
  canListChildren?: boolean;

  @Metadata({ data: "json, name=canManageMembers" })
  canManageMembers?: boolean;

  @Metadata({ data: "json, name=canReadRevisions" })
  canReadRevisions?: boolean;

  @Metadata({ data: "json, name=canRemoveChildren" })
  canRemoveChildren?: boolean;

  @Metadata({ data: "json, name=canRename" })
  canRename?: boolean;

  @Metadata({ data: "json, name=canRenameTeamDrive" })
  canRenameTeamDrive?: boolean;

  @Metadata({ data: "json, name=canResetTeamDriveRestrictions" })
  canResetTeamDriveRestrictions?: boolean;

  @Metadata({ data: "json, name=canShare" })
  canShare?: boolean;

  @Metadata({ data: "json, name=canTrashChildren" })
  canTrashChildren?: boolean;
}


// TeamDriveRestrictions
/** 
 * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
**/
export class TeamDriveRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminManagedRestrictions" })
  adminManagedRestrictions?: boolean;

  @Metadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @Metadata({ data: "json, name=domainUsersOnly" })
  domainUsersOnly?: boolean;

  @Metadata({ data: "json, name=teamMembersOnly" })
  teamMembersOnly?: boolean;
}


// TeamDrive
/** 
 * Deprecated: use the drive collection instead.
**/
export class TeamDrive extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundImageFile" })
  backgroundImageFile?: TeamDriveBackgroundImageFile;

  @Metadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: TeamDriveCapabilities;

  @Metadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @Metadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: TeamDriveRestrictions;

  @Metadata({ data: "json, name=themeId" })
  themeId?: string;
}
