import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentRestriction } from "./contentrestriction";
import { User } from "./user";
import { PermissionInput } from "./permission";
import { Label } from "./label";
import { Permission } from "./permission";



// FileCapabilities
/** 
 * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
**/
export class FileCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canAcceptOwnership" })
  canAcceptOwnership?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canAddChildren" })
  canAddChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canAddFolderFromAnotherDrive" })
  canAddFolderFromAnotherDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canAddMyDriveParent" })
  canAddMyDriveParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeCopyRequiresWriterPermission" })
  canChangeCopyRequiresWriterPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeSecurityUpdateEnabled" })
  canChangeSecurityUpdateEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canChangeViewersCanCopyContent" })
  canChangeViewersCanCopyContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canComment" })
  canComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCopy" })
  canCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteChildren" })
  canDeleteChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDownload" })
  canDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEdit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canListChildren" })
  canListChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canModifyContent" })
  canModifyContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canModifyContentRestriction" })
  canModifyContentRestriction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canModifyLabels" })
  canModifyLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveChildrenOutOfDrive" })
  canMoveChildrenOutOfDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveChildrenOutOfTeamDrive" })
  canMoveChildrenOutOfTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveChildrenWithinDrive" })
  canMoveChildrenWithinDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveChildrenWithinTeamDrive" })
  canMoveChildrenWithinTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveItemIntoTeamDrive" })
  canMoveItemIntoTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveItemOutOfDrive" })
  canMoveItemOutOfDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveItemOutOfTeamDrive" })
  canMoveItemOutOfTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveItemWithinDrive" })
  canMoveItemWithinDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveItemWithinTeamDrive" })
  canMoveItemWithinTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canMoveTeamDriveItem" })
  canMoveTeamDriveItem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canReadDrive" })
  canReadDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canReadLabels" })
  canReadLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canReadRevisions" })
  canReadRevisions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canReadTeamDrive" })
  canReadTeamDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRemoveChildren" })
  canRemoveChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRemoveMyDriveParent" })
  canRemoveMyDriveParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRename" })
  canRename?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canShare" })
  canShare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canTrash" })
  canTrash?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canTrashChildren" })
  canTrashChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUntrash" })
  canUntrash?: boolean;
}


// FileContentHintsThumbnail
/** 
 * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
**/
export class FileContentHintsThumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}


// FileContentHints
/** 
 * Additional information about the content of the file. These fields are never populated in responses.
**/
export class FileContentHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexableText" })
  indexableText?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: FileContentHintsThumbnail;
}


// FileImageMediaMetadataLocation
/** 
 * Geographic location information stored in the image.
**/
export class FileImageMediaMetadataLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altitude" })
  altitude?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


// FileImageMediaMetadata
/** 
 * Additional metadata about image media, if available.
**/
export class FileImageMediaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aperture" })
  aperture?: number;

  @SpeakeasyMetadata({ data: "json, name=cameraMake" })
  cameraMake?: string;

  @SpeakeasyMetadata({ data: "json, name=cameraModel" })
  cameraModel?: string;

  @SpeakeasyMetadata({ data: "json, name=colorSpace" })
  colorSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=exposureBias" })
  exposureBias?: number;

  @SpeakeasyMetadata({ data: "json, name=exposureMode" })
  exposureMode?: string;

  @SpeakeasyMetadata({ data: "json, name=exposureTime" })
  exposureTime?: number;

  @SpeakeasyMetadata({ data: "json, name=flashUsed" })
  flashUsed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=focalLength" })
  focalLength?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=isoSpeed" })
  isoSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=lens" })
  lens?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: FileImageMediaMetadataLocation;

  @SpeakeasyMetadata({ data: "json, name=maxApertureValue" })
  maxApertureValue?: number;

  @SpeakeasyMetadata({ data: "json, name=meteringMode" })
  meteringMode?: string;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: number;

  @SpeakeasyMetadata({ data: "json, name=sensor" })
  sensor?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectDistance" })
  subjectDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=whiteBalance" })
  whiteBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// FileLabelInfo
/** 
 * An overview of the labels on the file.
**/
export class FileLabelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];
}


// FileLinkShareMetadata
/** 
 * Contains details about the link URLs that clients are using to refer to this item.
**/
export class FileLinkShareMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityUpdateEligible" })
  securityUpdateEligible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityUpdateEnabled" })
  securityUpdateEnabled?: boolean;
}


// FileShortcutDetails
/** 
 * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
**/
export class FileShortcutDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetMimeType" })
  targetMimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=targetResourceKey" })
  targetResourceKey?: string;
}


// FileVideoMediaMetadata
/** 
 * Additional metadata about video media. This may not be available immediately upon upload.
**/
export class FileVideoMediaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationMillis" })
  durationMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// FileInput
/** 
 * The metadata for a file.
**/
export class FileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appProperties" })
  appProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: FileCapabilities;

  @SpeakeasyMetadata({ data: "json, name=contentHints" })
  contentHints?: FileContentHints;

  @SpeakeasyMetadata({ data: "json, name=contentRestrictions", elemType: ContentRestriction })
  contentRestrictions?: ContentRestriction[];

  @SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=driveId" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "json, name=explicitlyTrashed" })
  explicitlyTrashed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fileExtension" })
  fileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=folderColorRgb" })
  folderColorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=fullFileExtension" })
  fullFileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=hasAugmentedPermissions" })
  hasAugmentedPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasThumbnail" })
  hasThumbnail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headRevisionId" })
  headRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageMediaMetadata" })
  imageMediaMetadata?: FileImageMediaMetadata;

  @SpeakeasyMetadata({ data: "json, name=isAppAuthorized" })
  isAppAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labelInfo" })
  labelInfo?: FileLabelInfo;

  @SpeakeasyMetadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=linkShareMetadata" })
  linkShareMetadata?: FileLinkShareMetadata;

  @SpeakeasyMetadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedByMe" })
  modifiedByMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedByMeTime" })
  modifiedByMeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=ownedByMe" })
  ownedByMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=owners", elemType: User })
  owners?: User[];

  @SpeakeasyMetadata({ data: "json, name=parents" })
  parents?: string[];

  @SpeakeasyMetadata({ data: "json, name=permissionIds" })
  permissionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: PermissionInput })
  permissions?: PermissionInput[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=quotaBytesUsed" })
  quotaBytesUsed?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceKey" })
  resourceKey?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Checksum" })
  sha1Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256Checksum" })
  sha256Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharedWithMeTime" })
  sharedWithMeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=sharingUser" })
  sharingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=shortcutDetails" })
  shortcutDetails?: FileShortcutDetails;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=spaces" })
  spaces?: string[];

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=teamDriveId" })
  teamDriveId?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailLink" })
  thumbnailLink?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailVersion" })
  thumbnailVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=trashed" })
  trashed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trashedTime" })
  trashedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=trashingUser" })
  trashingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=videoMediaMetadata" })
  videoMediaMetadata?: FileVideoMediaMetadata;

  @SpeakeasyMetadata({ data: "json, name=viewedByMe" })
  viewedByMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=viewedByMeTime" })
  viewedByMeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=viewersCanCopyContent" })
  viewersCanCopyContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webContentLink" })
  webContentLink?: string;

  @SpeakeasyMetadata({ data: "json, name=webViewLink" })
  webViewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=writersCanShare" })
  writersCanShare?: boolean;
}


// File
/** 
 * The metadata for a file.
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appProperties" })
  appProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: FileCapabilities;

  @SpeakeasyMetadata({ data: "json, name=contentHints" })
  contentHints?: FileContentHints;

  @SpeakeasyMetadata({ data: "json, name=contentRestrictions", elemType: ContentRestriction })
  contentRestrictions?: ContentRestriction[];

  @SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=driveId" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "json, name=explicitlyTrashed" })
  explicitlyTrashed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exportLinks" })
  exportLinks?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fileExtension" })
  fileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=folderColorRgb" })
  folderColorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=fullFileExtension" })
  fullFileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=hasAugmentedPermissions" })
  hasAugmentedPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasThumbnail" })
  hasThumbnail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headRevisionId" })
  headRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageMediaMetadata" })
  imageMediaMetadata?: FileImageMediaMetadata;

  @SpeakeasyMetadata({ data: "json, name=isAppAuthorized" })
  isAppAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labelInfo" })
  labelInfo?: FileLabelInfo;

  @SpeakeasyMetadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=linkShareMetadata" })
  linkShareMetadata?: FileLinkShareMetadata;

  @SpeakeasyMetadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedByMe" })
  modifiedByMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedByMeTime" })
  modifiedByMeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=ownedByMe" })
  ownedByMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=owners", elemType: User })
  owners?: User[];

  @SpeakeasyMetadata({ data: "json, name=parents" })
  parents?: string[];

  @SpeakeasyMetadata({ data: "json, name=permissionIds" })
  permissionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: Permission })
  permissions?: Permission[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=quotaBytesUsed" })
  quotaBytesUsed?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceKey" })
  resourceKey?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Checksum" })
  sha1Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256Checksum" })
  sha256Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=shared" })
  shared?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharedWithMeTime" })
  sharedWithMeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=sharingUser" })
  sharingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=shortcutDetails" })
  shortcutDetails?: FileShortcutDetails;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=spaces" })
  spaces?: string[];

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=teamDriveId" })
  teamDriveId?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailLink" })
  thumbnailLink?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailVersion" })
  thumbnailVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=trashed" })
  trashed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trashedTime" })
  trashedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=trashingUser" })
  trashingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=videoMediaMetadata" })
  videoMediaMetadata?: FileVideoMediaMetadata;

  @SpeakeasyMetadata({ data: "json, name=viewedByMe" })
  viewedByMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=viewedByMeTime" })
  viewedByMeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=viewersCanCopyContent" })
  viewersCanCopyContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webContentLink" })
  webContentLink?: string;

  @SpeakeasyMetadata({ data: "json, name=webViewLink" })
  webViewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=writersCanShare" })
  writersCanShare?: boolean;
}
