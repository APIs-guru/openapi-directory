import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentRestriction } from "./contentrestriction";
import { Label } from "./label";
import { User } from "./user";
import { User } from "./user";
import { Permission } from "./permission";
import { User } from "./user";
import { User } from "./user";


// FileCapabilities
/** 
 * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
**/
export class FileCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canAcceptOwnership" })
  canAcceptOwnership?: boolean;

  @Metadata({ data: "json, name=canAddChildren" })
  canAddChildren?: boolean;

  @Metadata({ data: "json, name=canAddFolderFromAnotherDrive" })
  canAddFolderFromAnotherDrive?: boolean;

  @Metadata({ data: "json, name=canAddMyDriveParent" })
  canAddMyDriveParent?: boolean;

  @Metadata({ data: "json, name=canChangeCopyRequiresWriterPermission" })
  canChangeCopyRequiresWriterPermission?: boolean;

  @Metadata({ data: "json, name=canChangeSecurityUpdateEnabled" })
  canChangeSecurityUpdateEnabled?: boolean;

  @Metadata({ data: "json, name=canChangeViewersCanCopyContent" })
  canChangeViewersCanCopyContent?: boolean;

  @Metadata({ data: "json, name=canComment" })
  canComment?: boolean;

  @Metadata({ data: "json, name=canCopy" })
  canCopy?: boolean;

  @Metadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=canDeleteChildren" })
  canDeleteChildren?: boolean;

  @Metadata({ data: "json, name=canDownload" })
  canDownload?: boolean;

  @Metadata({ data: "json, name=canEdit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=canListChildren" })
  canListChildren?: boolean;

  @Metadata({ data: "json, name=canModifyContent" })
  canModifyContent?: boolean;

  @Metadata({ data: "json, name=canModifyContentRestriction" })
  canModifyContentRestriction?: boolean;

  @Metadata({ data: "json, name=canModifyLabels" })
  canModifyLabels?: boolean;

  @Metadata({ data: "json, name=canMoveChildrenOutOfDrive" })
  canMoveChildrenOutOfDrive?: boolean;

  @Metadata({ data: "json, name=canMoveChildrenOutOfTeamDrive" })
  canMoveChildrenOutOfTeamDrive?: boolean;

  @Metadata({ data: "json, name=canMoveChildrenWithinDrive" })
  canMoveChildrenWithinDrive?: boolean;

  @Metadata({ data: "json, name=canMoveChildrenWithinTeamDrive" })
  canMoveChildrenWithinTeamDrive?: boolean;

  @Metadata({ data: "json, name=canMoveItemIntoTeamDrive" })
  canMoveItemIntoTeamDrive?: boolean;

  @Metadata({ data: "json, name=canMoveItemOutOfDrive" })
  canMoveItemOutOfDrive?: boolean;

  @Metadata({ data: "json, name=canMoveItemOutOfTeamDrive" })
  canMoveItemOutOfTeamDrive?: boolean;

  @Metadata({ data: "json, name=canMoveItemWithinDrive" })
  canMoveItemWithinDrive?: boolean;

  @Metadata({ data: "json, name=canMoveItemWithinTeamDrive" })
  canMoveItemWithinTeamDrive?: boolean;

  @Metadata({ data: "json, name=canMoveTeamDriveItem" })
  canMoveTeamDriveItem?: boolean;

  @Metadata({ data: "json, name=canReadDrive" })
  canReadDrive?: boolean;

  @Metadata({ data: "json, name=canReadLabels" })
  canReadLabels?: boolean;

  @Metadata({ data: "json, name=canReadRevisions" })
  canReadRevisions?: boolean;

  @Metadata({ data: "json, name=canReadTeamDrive" })
  canReadTeamDrive?: boolean;

  @Metadata({ data: "json, name=canRemoveChildren" })
  canRemoveChildren?: boolean;

  @Metadata({ data: "json, name=canRemoveMyDriveParent" })
  canRemoveMyDriveParent?: boolean;

  @Metadata({ data: "json, name=canRename" })
  canRename?: boolean;

  @Metadata({ data: "json, name=canShare" })
  canShare?: boolean;

  @Metadata({ data: "json, name=canTrash" })
  canTrash?: boolean;

  @Metadata({ data: "json, name=canTrashChildren" })
  canTrashChildren?: boolean;

  @Metadata({ data: "json, name=canUntrash" })
  canUntrash?: boolean;
}


// FileContentHintsThumbnail
/** 
 * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
**/
export class FileContentHintsThumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}


// FileContentHints
/** 
 * Additional information about the content of the file. These fields are never populated in responses.
**/
export class FileContentHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexableText" })
  indexableText?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: FileContentHintsThumbnail;
}


// FileImageMediaMetadataLocation
/** 
 * Geographic location information stored in the image.
**/
export class FileImageMediaMetadataLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=altitude" })
  altitude?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


// FileImageMediaMetadata
/** 
 * Additional metadata about image media, if available.
**/
export class FileImageMediaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=aperture" })
  aperture?: number;

  @Metadata({ data: "json, name=cameraMake" })
  cameraMake?: string;

  @Metadata({ data: "json, name=cameraModel" })
  cameraModel?: string;

  @Metadata({ data: "json, name=colorSpace" })
  colorSpace?: string;

  @Metadata({ data: "json, name=exposureBias" })
  exposureBias?: number;

  @Metadata({ data: "json, name=exposureMode" })
  exposureMode?: string;

  @Metadata({ data: "json, name=exposureTime" })
  exposureTime?: number;

  @Metadata({ data: "json, name=flashUsed" })
  flashUsed?: boolean;

  @Metadata({ data: "json, name=focalLength" })
  focalLength?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=isoSpeed" })
  isoSpeed?: number;

  @Metadata({ data: "json, name=lens" })
  lens?: string;

  @Metadata({ data: "json, name=location" })
  location?: FileImageMediaMetadataLocation;

  @Metadata({ data: "json, name=maxApertureValue" })
  maxApertureValue?: number;

  @Metadata({ data: "json, name=meteringMode" })
  meteringMode?: string;

  @Metadata({ data: "json, name=rotation" })
  rotation?: number;

  @Metadata({ data: "json, name=sensor" })
  sensor?: string;

  @Metadata({ data: "json, name=subjectDistance" })
  subjectDistance?: number;

  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=whiteBalance" })
  whiteBalance?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// FileLabelInfo
/** 
 * An overview of the labels on the file.
**/
export class FileLabelInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];
}


// FileLinkShareMetadata
/** 
 * Contains details about the link URLs that clients are using to refer to this item.
**/
export class FileLinkShareMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityUpdateEligible" })
  securityUpdateEligible?: boolean;

  @Metadata({ data: "json, name=securityUpdateEnabled" })
  securityUpdateEnabled?: boolean;
}


// FileShortcutDetails
/** 
 * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
**/
export class FileShortcutDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetId" })
  targetId?: string;

  @Metadata({ data: "json, name=targetMimeType" })
  targetMimeType?: string;

  @Metadata({ data: "json, name=targetResourceKey" })
  targetResourceKey?: string;
}


// FileVideoMediaMetadata
/** 
 * Additional metadata about video media. This may not be available immediately upon upload.
**/
export class FileVideoMediaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationMillis" })
  durationMillis?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// File
/** 
 * The metadata for a file.
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=appProperties" })
  appProperties?: Map<string, string>;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: FileCapabilities;

  @Metadata({ data: "json, name=contentHints" })
  contentHints?: FileContentHints;

  @Metadata({ data: "json, name=contentRestrictions", elemType: shared.ContentRestriction })
  contentRestrictions?: ContentRestriction[];

  @Metadata({ data: "json, name=copyRequiresWriterPermission" })
  copyRequiresWriterPermission?: boolean;

  @Metadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=driveId" })
  driveId?: string;

  @Metadata({ data: "json, name=explicitlyTrashed" })
  explicitlyTrashed?: boolean;

  @Metadata({ data: "json, name=exportLinks" })
  exportLinks?: Map<string, string>;

  @Metadata({ data: "json, name=fileExtension" })
  fileExtension?: string;

  @Metadata({ data: "json, name=folderColorRgb" })
  folderColorRgb?: string;

  @Metadata({ data: "json, name=fullFileExtension" })
  fullFileExtension?: string;

  @Metadata({ data: "json, name=hasAugmentedPermissions" })
  hasAugmentedPermissions?: boolean;

  @Metadata({ data: "json, name=hasThumbnail" })
  hasThumbnail?: boolean;

  @Metadata({ data: "json, name=headRevisionId" })
  headRevisionId?: string;

  @Metadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageMediaMetadata" })
  imageMediaMetadata?: FileImageMediaMetadata;

  @Metadata({ data: "json, name=isAppAuthorized" })
  isAppAuthorized?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labelInfo" })
  labelInfo?: FileLabelInfo;

  @Metadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @Metadata({ data: "json, name=linkShareMetadata" })
  linkShareMetadata?: FileLinkShareMetadata;

  @Metadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=modifiedByMe" })
  modifiedByMe?: boolean;

  @Metadata({ data: "json, name=modifiedByMeTime" })
  modifiedByMeTime?: Date;

  @Metadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @Metadata({ data: "json, name=ownedByMe" })
  ownedByMe?: boolean;

  @Metadata({ data: "json, name=owners", elemType: shared.User })
  owners?: User[];

  @Metadata({ data: "json, name=parents" })
  parents?: string[];

  @Metadata({ data: "json, name=permissionIds" })
  permissionIds?: string[];

  @Metadata({ data: "json, name=permissions", elemType: shared.Permission })
  permissions?: Permission[];

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=quotaBytesUsed" })
  quotaBytesUsed?: string;

  @Metadata({ data: "json, name=resourceKey" })
  resourceKey?: string;

  @Metadata({ data: "json, name=sha1Checksum" })
  sha1Checksum?: string;

  @Metadata({ data: "json, name=sha256Checksum" })
  sha256Checksum?: string;

  @Metadata({ data: "json, name=shared" })
  shared?: boolean;

  @Metadata({ data: "json, name=sharedWithMeTime" })
  sharedWithMeTime?: Date;

  @Metadata({ data: "json, name=sharingUser" })
  sharingUser?: User;

  @Metadata({ data: "json, name=shortcutDetails" })
  shortcutDetails?: FileShortcutDetails;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=spaces" })
  spaces?: string[];

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=teamDriveId" })
  teamDriveId?: string;

  @Metadata({ data: "json, name=thumbnailLink" })
  thumbnailLink?: string;

  @Metadata({ data: "json, name=thumbnailVersion" })
  thumbnailVersion?: string;

  @Metadata({ data: "json, name=trashed" })
  trashed?: boolean;

  @Metadata({ data: "json, name=trashedTime" })
  trashedTime?: Date;

  @Metadata({ data: "json, name=trashingUser" })
  trashingUser?: User;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=videoMediaMetadata" })
  videoMediaMetadata?: FileVideoMediaMetadata;

  @Metadata({ data: "json, name=viewedByMe" })
  viewedByMe?: boolean;

  @Metadata({ data: "json, name=viewedByMeTime" })
  viewedByMeTime?: Date;

  @Metadata({ data: "json, name=viewersCanCopyContent" })
  viewersCanCopyContent?: boolean;

  @Metadata({ data: "json, name=webContentLink" })
  webContentLink?: string;

  @Metadata({ data: "json, name=webViewLink" })
  webViewLink?: string;

  @Metadata({ data: "json, name=writersCanShare" })
  writersCanShare?: boolean;
}
