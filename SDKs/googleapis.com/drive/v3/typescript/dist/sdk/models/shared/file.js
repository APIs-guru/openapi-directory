var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var FileCapabilities = /** @class */ (function (_super) {
    __extends(FileCapabilities, _super);
    function FileCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canAcceptOwnership" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canAcceptOwnership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canAddChildren" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canAddChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canAddFolderFromAnotherDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canAddFolderFromAnotherDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canAddMyDriveParent" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canAddMyDriveParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeCopyRequiresWriterPermission" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canChangeCopyRequiresWriterPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeSecurityUpdateEnabled" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canChangeSecurityUpdateEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canChangeViewersCanCopyContent" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canChangeViewersCanCopyContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canComment" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCopy" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDelete" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteChildren" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canDeleteChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDownload" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canEdit" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canListChildren" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canListChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canModifyContent" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canModifyContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canModifyContentRestriction" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canModifyContentRestriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canModifyLabels" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canModifyLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveChildrenOutOfDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveChildrenOutOfDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveChildrenOutOfTeamDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveChildrenOutOfTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveChildrenWithinDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveChildrenWithinDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveChildrenWithinTeamDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveChildrenWithinTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveItemIntoTeamDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveItemIntoTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveItemOutOfDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveItemOutOfDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveItemOutOfTeamDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveItemOutOfTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveItemWithinDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveItemWithinDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveItemWithinTeamDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveItemWithinTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canMoveTeamDriveItem" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canMoveTeamDriveItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canReadDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canReadDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canReadLabels" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canReadLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canReadRevisions" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canReadRevisions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canReadTeamDrive" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canReadTeamDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRemoveChildren" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canRemoveChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRemoveMyDriveParent" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canRemoveMyDriveParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRename" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canRename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canShare" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canShare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canTrash" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canTrash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canTrashChildren" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canTrashChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canUntrash" }),
        __metadata("design:type", Boolean)
    ], FileCapabilities.prototype, "canUntrash", void 0);
    return FileCapabilities;
}(SpeakeasyBase));
export { FileCapabilities };
// FileContentHintsThumbnail
/**
 * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
**/
var FileContentHintsThumbnail = /** @class */ (function (_super) {
    __extends(FileContentHintsThumbnail, _super);
    function FileContentHintsThumbnail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], FileContentHintsThumbnail.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], FileContentHintsThumbnail.prototype, "mimeType", void 0);
    return FileContentHintsThumbnail;
}(SpeakeasyBase));
export { FileContentHintsThumbnail };
// FileContentHints
/**
 * Additional information about the content of the file. These fields are never populated in responses.
**/
var FileContentHints = /** @class */ (function (_super) {
    __extends(FileContentHints, _super);
    function FileContentHints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableText" }),
        __metadata("design:type", String)
    ], FileContentHints.prototype, "indexableText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", FileContentHintsThumbnail)
    ], FileContentHints.prototype, "thumbnail", void 0);
    return FileContentHints;
}(SpeakeasyBase));
export { FileContentHints };
// FileImageMediaMetadataLocation
/**
 * Geographic location information stored in the image.
**/
var FileImageMediaMetadataLocation = /** @class */ (function (_super) {
    __extends(FileImageMediaMetadataLocation, _super);
    function FileImageMediaMetadataLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=altitude" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadataLocation.prototype, "altitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadataLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadataLocation.prototype, "longitude", void 0);
    return FileImageMediaMetadataLocation;
}(SpeakeasyBase));
export { FileImageMediaMetadataLocation };
// FileImageMediaMetadata
/**
 * Additional metadata about image media, if available.
**/
var FileImageMediaMetadata = /** @class */ (function (_super) {
    __extends(FileImageMediaMetadata, _super);
    function FileImageMediaMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aperture" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "aperture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cameraMake" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "cameraMake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cameraModel" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "cameraModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorSpace" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "colorSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exposureBias" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "exposureBias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exposureMode" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "exposureMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exposureTime" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "exposureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flashUsed" }),
        __metadata("design:type", Boolean)
    ], FileImageMediaMetadata.prototype, "flashUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=focalLength" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "focalLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isoSpeed" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "isoSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lens" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "lens", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", FileImageMediaMetadataLocation)
    ], FileImageMediaMetadata.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxApertureValue" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "maxApertureValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meteringMode" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "meteringMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotation" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensor" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "sensor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectDistance" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "subjectDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=whiteBalance" }),
        __metadata("design:type", String)
    ], FileImageMediaMetadata.prototype, "whiteBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], FileImageMediaMetadata.prototype, "width", void 0);
    return FileImageMediaMetadata;
}(SpeakeasyBase));
export { FileImageMediaMetadata };
// FileLabelInfo
/**
 * An overview of the labels on the file.
**/
var FileLabelInfo = /** @class */ (function (_super) {
    __extends(FileLabelInfo, _super);
    function FileLabelInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: Label }),
        __metadata("design:type", Array)
    ], FileLabelInfo.prototype, "labels", void 0);
    return FileLabelInfo;
}(SpeakeasyBase));
export { FileLabelInfo };
// FileLinkShareMetadata
/**
 * Contains details about the link URLs that clients are using to refer to this item.
**/
var FileLinkShareMetadata = /** @class */ (function (_super) {
    __extends(FileLinkShareMetadata, _super);
    function FileLinkShareMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityUpdateEligible" }),
        __metadata("design:type", Boolean)
    ], FileLinkShareMetadata.prototype, "securityUpdateEligible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityUpdateEnabled" }),
        __metadata("design:type", Boolean)
    ], FileLinkShareMetadata.prototype, "securityUpdateEnabled", void 0);
    return FileLinkShareMetadata;
}(SpeakeasyBase));
export { FileLinkShareMetadata };
// FileShortcutDetails
/**
 * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
**/
var FileShortcutDetails = /** @class */ (function (_super) {
    __extends(FileShortcutDetails, _super);
    function FileShortcutDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", String)
    ], FileShortcutDetails.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetMimeType" }),
        __metadata("design:type", String)
    ], FileShortcutDetails.prototype, "targetMimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetResourceKey" }),
        __metadata("design:type", String)
    ], FileShortcutDetails.prototype, "targetResourceKey", void 0);
    return FileShortcutDetails;
}(SpeakeasyBase));
export { FileShortcutDetails };
// FileVideoMediaMetadata
/**
 * Additional metadata about video media. This may not be available immediately upon upload.
**/
var FileVideoMediaMetadata = /** @class */ (function (_super) {
    __extends(FileVideoMediaMetadata, _super);
    function FileVideoMediaMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationMillis" }),
        __metadata("design:type", String)
    ], FileVideoMediaMetadata.prototype, "durationMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], FileVideoMediaMetadata.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], FileVideoMediaMetadata.prototype, "width", void 0);
    return FileVideoMediaMetadata;
}(SpeakeasyBase));
export { FileVideoMediaMetadata };
// FileInput
/**
 * The metadata for a file.
**/
var FileInput = /** @class */ (function (_super) {
    __extends(FileInput, _super);
    function FileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appProperties" }),
        __metadata("design:type", Map)
    ], FileInput.prototype, "appProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", FileCapabilities)
    ], FileInput.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentHints" }),
        __metadata("design:type", FileContentHints)
    ], FileInput.prototype, "contentHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentRestrictions", elemType: ContentRestriction }),
        __metadata("design:type", Array)
    ], FileInput.prototype, "contentRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "copyRequiresWriterPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTime" }),
        __metadata("design:type", Date)
    ], FileInput.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveId" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicitlyTrashed" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "explicitlyTrashed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileExtension" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "fileExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderColorRgb" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "folderColorRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullFileExtension" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "fullFileExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasAugmentedPermissions" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "hasAugmentedPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasThumbnail" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "hasThumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headRevisionId" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "headRevisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconLink" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "iconLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageMediaMetadata" }),
        __metadata("design:type", FileImageMediaMetadata)
    ], FileInput.prototype, "imageMediaMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAppAuthorized" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "isAppAuthorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelInfo" }),
        __metadata("design:type", FileLabelInfo)
    ], FileInput.prototype, "labelInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifyingUser" }),
        __metadata("design:type", User)
    ], FileInput.prototype, "lastModifyingUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkShareMetadata" }),
        __metadata("design:type", FileLinkShareMetadata)
    ], FileInput.prototype, "linkShareMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5Checksum" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "md5Checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedByMe" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "modifiedByMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedByMeTime" }),
        __metadata("design:type", Date)
    ], FileInput.prototype, "modifiedByMeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedTime" }),
        __metadata("design:type", Date)
    ], FileInput.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalFilename" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "originalFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownedByMe" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "ownedByMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners", elemType: User }),
        __metadata("design:type", Array)
    ], FileInput.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents" }),
        __metadata("design:type", Array)
    ], FileInput.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionIds" }),
        __metadata("design:type", Array)
    ], FileInput.prototype, "permissionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions", elemType: PermissionInput }),
        __metadata("design:type", Array)
    ], FileInput.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], FileInput.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesUsed" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "quotaBytesUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceKey" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Checksum" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "sha1Checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Checksum" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "sha256Checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedWithMeTime" }),
        __metadata("design:type", Date)
    ], FileInput.prototype, "sharedWithMeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharingUser" }),
        __metadata("design:type", User)
    ], FileInput.prototype, "sharingUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortcutDetails" }),
        __metadata("design:type", FileShortcutDetails)
    ], FileInput.prototype, "shortcutDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaces" }),
        __metadata("design:type", Array)
    ], FileInput.prototype, "spaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "starred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamDriveId" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailLink" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "thumbnailLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailVersion" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "thumbnailVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashed" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "trashed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashedTime" }),
        __metadata("design:type", Date)
    ], FileInput.prototype, "trashedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashingUser" }),
        __metadata("design:type", User)
    ], FileInput.prototype, "trashingUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoMediaMetadata" }),
        __metadata("design:type", FileVideoMediaMetadata)
    ], FileInput.prototype, "videoMediaMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewedByMe" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "viewedByMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewedByMeTime" }),
        __metadata("design:type", Date)
    ], FileInput.prototype, "viewedByMeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewersCanCopyContent" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "viewersCanCopyContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webContentLink" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "webContentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webViewLink" }),
        __metadata("design:type", String)
    ], FileInput.prototype, "webViewLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writersCanShare" }),
        __metadata("design:type", Boolean)
    ], FileInput.prototype, "writersCanShare", void 0);
    return FileInput;
}(SpeakeasyBase));
export { FileInput };
// File
/**
 * The metadata for a file.
**/
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appProperties" }),
        __metadata("design:type", Map)
    ], File.prototype, "appProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", FileCapabilities)
    ], File.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentHints" }),
        __metadata("design:type", FileContentHints)
    ], File.prototype, "contentHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentRestrictions", elemType: ContentRestriction }),
        __metadata("design:type", Array)
    ], File.prototype, "contentRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyRequiresWriterPermission" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "copyRequiresWriterPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTime" }),
        __metadata("design:type", Date)
    ], File.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], File.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveId" }),
        __metadata("design:type", String)
    ], File.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicitlyTrashed" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "explicitlyTrashed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportLinks" }),
        __metadata("design:type", Map)
    ], File.prototype, "exportLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileExtension" }),
        __metadata("design:type", String)
    ], File.prototype, "fileExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderColorRgb" }),
        __metadata("design:type", String)
    ], File.prototype, "folderColorRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullFileExtension" }),
        __metadata("design:type", String)
    ], File.prototype, "fullFileExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasAugmentedPermissions" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "hasAugmentedPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasThumbnail" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "hasThumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headRevisionId" }),
        __metadata("design:type", String)
    ], File.prototype, "headRevisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconLink" }),
        __metadata("design:type", String)
    ], File.prototype, "iconLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], File.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageMediaMetadata" }),
        __metadata("design:type", FileImageMediaMetadata)
    ], File.prototype, "imageMediaMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAppAuthorized" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "isAppAuthorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], File.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelInfo" }),
        __metadata("design:type", FileLabelInfo)
    ], File.prototype, "labelInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifyingUser" }),
        __metadata("design:type", User)
    ], File.prototype, "lastModifyingUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkShareMetadata" }),
        __metadata("design:type", FileLinkShareMetadata)
    ], File.prototype, "linkShareMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5Checksum" }),
        __metadata("design:type", String)
    ], File.prototype, "md5Checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], File.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedByMe" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "modifiedByMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedByMeTime" }),
        __metadata("design:type", Date)
    ], File.prototype, "modifiedByMeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedTime" }),
        __metadata("design:type", Date)
    ], File.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], File.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalFilename" }),
        __metadata("design:type", String)
    ], File.prototype, "originalFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownedByMe" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "ownedByMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners", elemType: User }),
        __metadata("design:type", Array)
    ], File.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents" }),
        __metadata("design:type", Array)
    ], File.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionIds" }),
        __metadata("design:type", Array)
    ], File.prototype, "permissionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions", elemType: Permission }),
        __metadata("design:type", Array)
    ], File.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], File.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaBytesUsed" }),
        __metadata("design:type", String)
    ], File.prototype, "quotaBytesUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceKey" }),
        __metadata("design:type", String)
    ], File.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Checksum" }),
        __metadata("design:type", String)
    ], File.prototype, "sha1Checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Checksum" }),
        __metadata("design:type", String)
    ], File.prototype, "sha256Checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedWithMeTime" }),
        __metadata("design:type", Date)
    ], File.prototype, "sharedWithMeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharingUser" }),
        __metadata("design:type", User)
    ], File.prototype, "sharingUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortcutDetails" }),
        __metadata("design:type", FileShortcutDetails)
    ], File.prototype, "shortcutDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], File.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaces" }),
        __metadata("design:type", Array)
    ], File.prototype, "spaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "starred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamDriveId" }),
        __metadata("design:type", String)
    ], File.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailLink" }),
        __metadata("design:type", String)
    ], File.prototype, "thumbnailLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailVersion" }),
        __metadata("design:type", String)
    ], File.prototype, "thumbnailVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashed" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "trashed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashedTime" }),
        __metadata("design:type", Date)
    ], File.prototype, "trashedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashingUser" }),
        __metadata("design:type", User)
    ], File.prototype, "trashingUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], File.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoMediaMetadata" }),
        __metadata("design:type", FileVideoMediaMetadata)
    ], File.prototype, "videoMediaMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewedByMe" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "viewedByMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewedByMeTime" }),
        __metadata("design:type", Date)
    ], File.prototype, "viewedByMeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewersCanCopyContent" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "viewersCanCopyContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webContentLink" }),
        __metadata("design:type", String)
    ], File.prototype, "webContentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webViewLink" }),
        __metadata("design:type", String)
    ], File.prototype, "webViewLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writersCanShare" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "writersCanShare", void 0);
    return File;
}(SpeakeasyBase));
export { File };
