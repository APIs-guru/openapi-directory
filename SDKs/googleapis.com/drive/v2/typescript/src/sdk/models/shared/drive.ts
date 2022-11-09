import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DriveBackgroundImageFile
/** 
 * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
export class DriveBackgroundImageFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;

  @Metadata({ data: "json, name=xCoordinate" })
  xCoordinate?: number;

  @Metadata({ data: "json, name=yCoordinate" })
  yCoordinate?: number;
}


// DriveCapabilities
/** 
 * Capabilities the current user has on this shared drive.
**/
export class DriveCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canAddChildren" })
  canAddChildren?: boolean;

  @Metadata({ data: "json, name=canChangeCopyRequiresWriterPermissionRestriction" })
  canChangeCopyRequiresWriterPermissionRestriction?: boolean;

  @Metadata({ data: "json, name=canChangeDomainUsersOnlyRestriction" })
  canChangeDomainUsersOnlyRestriction?: boolean;

  @Metadata({ data: "json, name=canChangeDriveBackground" })
  canChangeDriveBackground?: boolean;

  @Metadata({ data: "json, name=canChangeDriveMembersOnlyRestriction" })
  canChangeDriveMembersOnlyRestriction?: boolean;

  @Metadata({ data: "json, name=canComment" })
  canComment?: boolean;

  @Metadata({ data: "json, name=canCopy" })
  canCopy?: boolean;

  @Metadata({ data: "json, name=canDeleteChildren" })
  canDeleteChildren?: boolean;

  @Metadata({ data: "json, name=canDeleteDrive" })
  canDeleteDrive?: boolean;

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

  @Metadata({ data: "json, name=canRename" })
  canRename?: boolean;

  @Metadata({ data: "json, name=canRenameDrive" })
  canRenameDrive?: boolean;

  @Metadata({ data: "json, name=canResetDriveRestrictions" })
  canResetDriveRestrictions?: boolean;

  @Metadata({ data: "json, name=canShare" })
  canShare?: boolean;

  @Metadata({ data: "json, name=canTrashChildren" })
  canTrashChildren?: boolean;
}


// DriveRestrictions
/** 
 * A set of restrictions that apply to this shared drive or items inside this shared drive.
**/
export class DriveRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminManagedRestrictions" })
  adminManagedRestrictions?: boolean;

  @Metadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @Metadata({ data: "json, name=domainUsersOnly" })
  domainUsersOnly?: boolean;

  @Metadata({ data: "json, name=driveMembersOnly" })
  driveMembersOnly?: boolean;
}


// Drive
/** 
 * Representation of a shared drive.
**/
export class Drive extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundImageFile" })
  backgroundImageFile?: DriveBackgroundImageFile;

  @Metadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: DriveCapabilities;

  @Metadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: DriveRestrictions;

  @Metadata({ data: "json, name=themeId" })
  themeId?: string;
}
