import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DriveBackgroundImageFile
/** 
 * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
export class DriveBackgroundImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=xCoordinate" })
  xCoordinate?: number;

  @SpeakeasyMetadata({ data: "json, name=yCoordinate" })
  yCoordinate?: number;
}


// DriveCapabilities
/** 
 * Capabilities the current user has on this shared drive.
**/
export class DriveCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canAddChildren" })
  canAddChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeCopyRequiresWriterPermissionRestriction" })
  canChangeCopyRequiresWriterPermissionRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeDomainUsersOnlyRestriction" })
  canChangeDomainUsersOnlyRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeDriveBackground" })
  canChangeDriveBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeDriveMembersOnlyRestriction" })
  canChangeDriveMembersOnlyRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canComment" })
  canComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCopy" })
  canCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteChildren" })
  canDeleteChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteDrive" })
  canDeleteDrive?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=canRename" })
  canRename?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRenameDrive" })
  canRenameDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canResetDriveRestrictions" })
  canResetDriveRestrictions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canShare" })
  canShare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canTrashChildren" })
  canTrashChildren?: boolean;
}


// DriveRestrictions
/** 
 * A set of restrictions that apply to this shared drive or items inside this shared drive.
**/
export class DriveRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminManagedRestrictions" })
  adminManagedRestrictions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domainUsersOnly" })
  domainUsersOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=driveMembersOnly" })
  driveMembersOnly?: boolean;
}


// Drive
/** 
 * Representation of a shared drive.
**/
export class Drive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundImageFile" })
  backgroundImageFile?: DriveBackgroundImageFile;

  @SpeakeasyMetadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: DriveCapabilities;

  @SpeakeasyMetadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: DriveRestrictions;

  @SpeakeasyMetadata({ data: "json, name=themeId" })
  themeId?: string;
}
