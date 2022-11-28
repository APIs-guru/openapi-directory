import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRestriction } from "./contentrestriction";
import { User } from "./user";
import { PermissionInput } from "./permission";
import { Label } from "./label";
import { Permission } from "./permission";
/**
 * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
**/
export declare class FileCapabilities extends SpeakeasyBase {
    canAcceptOwnership?: boolean;
    canAddChildren?: boolean;
    canAddFolderFromAnotherDrive?: boolean;
    canAddMyDriveParent?: boolean;
    canChangeCopyRequiresWriterPermission?: boolean;
    canChangeSecurityUpdateEnabled?: boolean;
    canChangeViewersCanCopyContent?: boolean;
    canComment?: boolean;
    canCopy?: boolean;
    canDelete?: boolean;
    canDeleteChildren?: boolean;
    canDownload?: boolean;
    canEdit?: boolean;
    canListChildren?: boolean;
    canModifyContent?: boolean;
    canModifyContentRestriction?: boolean;
    canModifyLabels?: boolean;
    canMoveChildrenOutOfDrive?: boolean;
    canMoveChildrenOutOfTeamDrive?: boolean;
    canMoveChildrenWithinDrive?: boolean;
    canMoveChildrenWithinTeamDrive?: boolean;
    canMoveItemIntoTeamDrive?: boolean;
    canMoveItemOutOfDrive?: boolean;
    canMoveItemOutOfTeamDrive?: boolean;
    canMoveItemWithinDrive?: boolean;
    canMoveItemWithinTeamDrive?: boolean;
    canMoveTeamDriveItem?: boolean;
    canReadDrive?: boolean;
    canReadLabels?: boolean;
    canReadRevisions?: boolean;
    canReadTeamDrive?: boolean;
    canRemoveChildren?: boolean;
    canRemoveMyDriveParent?: boolean;
    canRename?: boolean;
    canShare?: boolean;
    canTrash?: boolean;
    canTrashChildren?: boolean;
    canUntrash?: boolean;
}
/**
 * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
**/
export declare class FileContentHintsThumbnail extends SpeakeasyBase {
    image?: string;
    mimeType?: string;
}
/**
 * Additional information about the content of the file. These fields are never populated in responses.
**/
export declare class FileContentHints extends SpeakeasyBase {
    indexableText?: string;
    thumbnail?: FileContentHintsThumbnail;
}
/**
 * Geographic location information stored in the image.
**/
export declare class FileImageMediaMetadataLocation extends SpeakeasyBase {
    altitude?: number;
    latitude?: number;
    longitude?: number;
}
/**
 * Additional metadata about image media, if available.
**/
export declare class FileImageMediaMetadata extends SpeakeasyBase {
    aperture?: number;
    cameraMake?: string;
    cameraModel?: string;
    colorSpace?: string;
    exposureBias?: number;
    exposureMode?: string;
    exposureTime?: number;
    flashUsed?: boolean;
    focalLength?: number;
    height?: number;
    isoSpeed?: number;
    lens?: string;
    location?: FileImageMediaMetadataLocation;
    maxApertureValue?: number;
    meteringMode?: string;
    rotation?: number;
    sensor?: string;
    subjectDistance?: number;
    time?: string;
    whiteBalance?: string;
    width?: number;
}
/**
 * An overview of the labels on the file.
**/
export declare class FileLabelInfo extends SpeakeasyBase {
    labels?: Label[];
}
/**
 * Contains details about the link URLs that clients are using to refer to this item.
**/
export declare class FileLinkShareMetadata extends SpeakeasyBase {
    securityUpdateEligible?: boolean;
    securityUpdateEnabled?: boolean;
}
/**
 * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
**/
export declare class FileShortcutDetails extends SpeakeasyBase {
    targetId?: string;
    targetMimeType?: string;
    targetResourceKey?: string;
}
/**
 * Additional metadata about video media. This may not be available immediately upon upload.
**/
export declare class FileVideoMediaMetadata extends SpeakeasyBase {
    durationMillis?: string;
    height?: number;
    width?: number;
}
/**
 * The metadata for a file.
**/
export declare class FileInput extends SpeakeasyBase {
    appProperties?: Map<string, string>;
    capabilities?: FileCapabilities;
    contentHints?: FileContentHints;
    contentRestrictions?: ContentRestriction[];
    copyRequiresWriterPermission?: boolean;
    createdTime?: Date;
    description?: string;
    driveId?: string;
    explicitlyTrashed?: boolean;
    fileExtension?: string;
    folderColorRgb?: string;
    fullFileExtension?: string;
    hasAugmentedPermissions?: boolean;
    hasThumbnail?: boolean;
    headRevisionId?: string;
    iconLink?: string;
    id?: string;
    imageMediaMetadata?: FileImageMediaMetadata;
    isAppAuthorized?: boolean;
    kind?: string;
    labelInfo?: FileLabelInfo;
    lastModifyingUser?: User;
    linkShareMetadata?: FileLinkShareMetadata;
    md5Checksum?: string;
    mimeType?: string;
    modifiedByMe?: boolean;
    modifiedByMeTime?: Date;
    modifiedTime?: Date;
    name?: string;
    originalFilename?: string;
    ownedByMe?: boolean;
    owners?: User[];
    parents?: string[];
    permissionIds?: string[];
    permissions?: PermissionInput[];
    properties?: Map<string, string>;
    quotaBytesUsed?: string;
    resourceKey?: string;
    sha1Checksum?: string;
    sha256Checksum?: string;
    shared?: boolean;
    sharedWithMeTime?: Date;
    sharingUser?: User;
    shortcutDetails?: FileShortcutDetails;
    size?: string;
    spaces?: string[];
    starred?: boolean;
    teamDriveId?: string;
    thumbnailLink?: string;
    thumbnailVersion?: string;
    trashed?: boolean;
    trashedTime?: Date;
    trashingUser?: User;
    version?: string;
    videoMediaMetadata?: FileVideoMediaMetadata;
    viewedByMe?: boolean;
    viewedByMeTime?: Date;
    viewersCanCopyContent?: boolean;
    webContentLink?: string;
    webViewLink?: string;
    writersCanShare?: boolean;
}
/**
 * The metadata for a file.
**/
export declare class File extends SpeakeasyBase {
    appProperties?: Map<string, string>;
    capabilities?: FileCapabilities;
    contentHints?: FileContentHints;
    contentRestrictions?: ContentRestriction[];
    copyRequiresWriterPermission?: boolean;
    createdTime?: Date;
    description?: string;
    driveId?: string;
    explicitlyTrashed?: boolean;
    exportLinks?: Map<string, string>;
    fileExtension?: string;
    folderColorRgb?: string;
    fullFileExtension?: string;
    hasAugmentedPermissions?: boolean;
    hasThumbnail?: boolean;
    headRevisionId?: string;
    iconLink?: string;
    id?: string;
    imageMediaMetadata?: FileImageMediaMetadata;
    isAppAuthorized?: boolean;
    kind?: string;
    labelInfo?: FileLabelInfo;
    lastModifyingUser?: User;
    linkShareMetadata?: FileLinkShareMetadata;
    md5Checksum?: string;
    mimeType?: string;
    modifiedByMe?: boolean;
    modifiedByMeTime?: Date;
    modifiedTime?: Date;
    name?: string;
    originalFilename?: string;
    ownedByMe?: boolean;
    owners?: User[];
    parents?: string[];
    permissionIds?: string[];
    permissions?: Permission[];
    properties?: Map<string, string>;
    quotaBytesUsed?: string;
    resourceKey?: string;
    sha1Checksum?: string;
    sha256Checksum?: string;
    shared?: boolean;
    sharedWithMeTime?: Date;
    sharingUser?: User;
    shortcutDetails?: FileShortcutDetails;
    size?: string;
    spaces?: string[];
    starred?: boolean;
    teamDriveId?: string;
    thumbnailLink?: string;
    thumbnailVersion?: string;
    trashed?: boolean;
    trashedTime?: Date;
    trashingUser?: User;
    version?: string;
    videoMediaMetadata?: FileVideoMediaMetadata;
    viewedByMe?: boolean;
    viewedByMeTime?: Date;
    viewersCanCopyContent?: boolean;
    webContentLink?: string;
    webViewLink?: string;
    writersCanShare?: boolean;
}
