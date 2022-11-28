import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRestriction } from "./contentrestriction";
import { User } from "./user";
import { ParentReference } from "./parentreference";
import { PermissionInput } from "./permission";
import { Property } from "./property";
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
    canChangeRestrictedDownload?: boolean;
    canChangeSecurityUpdateEnabled?: boolean;
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
 * Geographic location information stored in the image.
**/
export declare class FileImageMediaMetadataLocation extends SpeakeasyBase {
    altitude?: number;
    latitude?: number;
    longitude?: number;
}
/**
 * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
**/
export declare class FileImageMediaMetadata extends SpeakeasyBase {
    aperture?: number;
    cameraMake?: string;
    cameraModel?: string;
    colorSpace?: string;
    date?: string;
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
    whiteBalance?: string;
    width?: number;
}
/**
 * Indexable text attributes for the file (can only be written). For more information, see Manage file metadata.
**/
export declare class FileIndexableText extends SpeakeasyBase {
    text?: string;
}
/**
 * An overview of the labels on the file.
**/
export declare class FileLabelInfo extends SpeakeasyBase {
    labels?: Label[];
}
/**
 * A group of labels for the file.
**/
export declare class FileLabels extends SpeakeasyBase {
    hidden?: boolean;
    modified?: boolean;
    restricted?: boolean;
    starred?: boolean;
    trashed?: boolean;
    viewed?: boolean;
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
 * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
**/
export declare class FileThumbnail extends SpeakeasyBase {
    image?: string;
    mimeType?: string;
}
/**
 * Metadata about video media. This will only be present for video types.
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
    alternateLink?: string;
    appDataContents?: boolean;
    canComment?: boolean;
    canReadRevisions?: boolean;
    capabilities?: FileCapabilities;
    contentRestrictions?: ContentRestriction[];
    copyRequiresWriterPermission?: boolean;
    copyable?: boolean;
    createdDate?: Date;
    defaultOpenWithLink?: string;
    description?: string;
    downloadUrl?: string;
    driveId?: string;
    editable?: boolean;
    embedLink?: string;
    etag?: string;
    explicitlyTrashed?: boolean;
    fileExtension?: string;
    fileSize?: string;
    folderColorRgb?: string;
    fullFileExtension?: string;
    hasAugmentedPermissions?: boolean;
    hasThumbnail?: boolean;
    headRevisionId?: string;
    iconLink?: string;
    id?: string;
    imageMediaMetadata?: FileImageMediaMetadata;
    indexableText?: FileIndexableText;
    isAppAuthorized?: boolean;
    kind?: string;
    labelInfo?: FileLabelInfo;
    labels?: FileLabels;
    lastModifyingUser?: User;
    lastModifyingUserName?: string;
    lastViewedByMeDate?: Date;
    linkShareMetadata?: FileLinkShareMetadata;
    markedViewedByMeDate?: Date;
    md5Checksum?: string;
    mimeType?: string;
    modifiedByMeDate?: Date;
    modifiedDate?: Date;
    openWithLinks?: Map<string, string>;
    originalFilename?: string;
    ownedByMe?: boolean;
    ownerNames?: string[];
    owners?: User[];
    parents?: ParentReference[];
    permissionIds?: string[];
    permissions?: PermissionInput[];
    properties?: Property[];
    quotaBytesUsed?: string;
    resourceKey?: string;
    selfLink?: string;
    sha1Checksum?: string;
    sha256Checksum?: string;
    shareable?: boolean;
    shared?: boolean;
    sharedWithMeDate?: Date;
    sharingUser?: User;
    shortcutDetails?: FileShortcutDetails;
    spaces?: string[];
    teamDriveId?: string;
    thumbnail?: FileThumbnail;
    thumbnailLink?: string;
    thumbnailVersion?: string;
    title?: string;
    trashedDate?: Date;
    trashingUser?: User;
    userPermission?: PermissionInput;
    version?: string;
    videoMediaMetadata?: FileVideoMediaMetadata;
    webContentLink?: string;
    webViewLink?: string;
    writersCanShare?: boolean;
}
/**
 * The metadata for a file.
**/
export declare class File extends SpeakeasyBase {
    alternateLink?: string;
    appDataContents?: boolean;
    canComment?: boolean;
    canReadRevisions?: boolean;
    capabilities?: FileCapabilities;
    contentRestrictions?: ContentRestriction[];
    copyRequiresWriterPermission?: boolean;
    copyable?: boolean;
    createdDate?: Date;
    defaultOpenWithLink?: string;
    description?: string;
    downloadUrl?: string;
    driveId?: string;
    editable?: boolean;
    embedLink?: string;
    etag?: string;
    explicitlyTrashed?: boolean;
    exportLinks?: Map<string, string>;
    fileExtension?: string;
    fileSize?: string;
    folderColorRgb?: string;
    fullFileExtension?: string;
    hasAugmentedPermissions?: boolean;
    hasThumbnail?: boolean;
    headRevisionId?: string;
    iconLink?: string;
    id?: string;
    imageMediaMetadata?: FileImageMediaMetadata;
    indexableText?: FileIndexableText;
    isAppAuthorized?: boolean;
    kind?: string;
    labelInfo?: FileLabelInfo;
    labels?: FileLabels;
    lastModifyingUser?: User;
    lastModifyingUserName?: string;
    lastViewedByMeDate?: Date;
    linkShareMetadata?: FileLinkShareMetadata;
    markedViewedByMeDate?: Date;
    md5Checksum?: string;
    mimeType?: string;
    modifiedByMeDate?: Date;
    modifiedDate?: Date;
    openWithLinks?: Map<string, string>;
    originalFilename?: string;
    ownedByMe?: boolean;
    ownerNames?: string[];
    owners?: User[];
    parents?: ParentReference[];
    permissionIds?: string[];
    permissions?: Permission[];
    properties?: Property[];
    quotaBytesUsed?: string;
    resourceKey?: string;
    selfLink?: string;
    sha1Checksum?: string;
    sha256Checksum?: string;
    shareable?: boolean;
    shared?: boolean;
    sharedWithMeDate?: Date;
    sharingUser?: User;
    shortcutDetails?: FileShortcutDetails;
    spaces?: string[];
    teamDriveId?: string;
    thumbnail?: FileThumbnail;
    thumbnailLink?: string;
    thumbnailVersion?: string;
    title?: string;
    trashedDate?: Date;
    trashingUser?: User;
    userPermission?: Permission;
    version?: string;
    videoMediaMetadata?: FileVideoMediaMetadata;
    webContentLink?: string;
    webViewLink?: string;
    writersCanShare?: boolean;
}
