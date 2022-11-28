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
export var MetadataOptionsAclEnum;
(function (MetadataOptionsAclEnum) {
    MetadataOptionsAclEnum["AclUnspecified"] = "ACL_UNSPECIFIED";
    MetadataOptionsAclEnum["AclDestinationBucketDefault"] = "ACL_DESTINATION_BUCKET_DEFAULT";
    MetadataOptionsAclEnum["AclPreserve"] = "ACL_PRESERVE";
})(MetadataOptionsAclEnum || (MetadataOptionsAclEnum = {}));
export var MetadataOptionsGidEnum;
(function (MetadataOptionsGidEnum) {
    MetadataOptionsGidEnum["GidUnspecified"] = "GID_UNSPECIFIED";
    MetadataOptionsGidEnum["GidSkip"] = "GID_SKIP";
    MetadataOptionsGidEnum["GidNumber"] = "GID_NUMBER";
})(MetadataOptionsGidEnum || (MetadataOptionsGidEnum = {}));
export var MetadataOptionsKmsKeyEnum;
(function (MetadataOptionsKmsKeyEnum) {
    MetadataOptionsKmsKeyEnum["KmsKeyUnspecified"] = "KMS_KEY_UNSPECIFIED";
    MetadataOptionsKmsKeyEnum["KmsKeyDestinationBucketDefault"] = "KMS_KEY_DESTINATION_BUCKET_DEFAULT";
    MetadataOptionsKmsKeyEnum["KmsKeyPreserve"] = "KMS_KEY_PRESERVE";
})(MetadataOptionsKmsKeyEnum || (MetadataOptionsKmsKeyEnum = {}));
export var MetadataOptionsModeEnum;
(function (MetadataOptionsModeEnum) {
    MetadataOptionsModeEnum["ModeUnspecified"] = "MODE_UNSPECIFIED";
    MetadataOptionsModeEnum["ModeSkip"] = "MODE_SKIP";
    MetadataOptionsModeEnum["ModePreserve"] = "MODE_PRESERVE";
})(MetadataOptionsModeEnum || (MetadataOptionsModeEnum = {}));
export var MetadataOptionsStorageClassEnum;
(function (MetadataOptionsStorageClassEnum) {
    MetadataOptionsStorageClassEnum["StorageClassUnspecified"] = "STORAGE_CLASS_UNSPECIFIED";
    MetadataOptionsStorageClassEnum["StorageClassDestinationBucketDefault"] = "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT";
    MetadataOptionsStorageClassEnum["StorageClassPreserve"] = "STORAGE_CLASS_PRESERVE";
    MetadataOptionsStorageClassEnum["StorageClassStandard"] = "STORAGE_CLASS_STANDARD";
    MetadataOptionsStorageClassEnum["StorageClassNearline"] = "STORAGE_CLASS_NEARLINE";
    MetadataOptionsStorageClassEnum["StorageClassColdline"] = "STORAGE_CLASS_COLDLINE";
    MetadataOptionsStorageClassEnum["StorageClassArchive"] = "STORAGE_CLASS_ARCHIVE";
})(MetadataOptionsStorageClassEnum || (MetadataOptionsStorageClassEnum = {}));
export var MetadataOptionsSymlinkEnum;
(function (MetadataOptionsSymlinkEnum) {
    MetadataOptionsSymlinkEnum["SymlinkUnspecified"] = "SYMLINK_UNSPECIFIED";
    MetadataOptionsSymlinkEnum["SymlinkSkip"] = "SYMLINK_SKIP";
    MetadataOptionsSymlinkEnum["SymlinkPreserve"] = "SYMLINK_PRESERVE";
})(MetadataOptionsSymlinkEnum || (MetadataOptionsSymlinkEnum = {}));
export var MetadataOptionsTemporaryHoldEnum;
(function (MetadataOptionsTemporaryHoldEnum) {
    MetadataOptionsTemporaryHoldEnum["TemporaryHoldUnspecified"] = "TEMPORARY_HOLD_UNSPECIFIED";
    MetadataOptionsTemporaryHoldEnum["TemporaryHoldSkip"] = "TEMPORARY_HOLD_SKIP";
    MetadataOptionsTemporaryHoldEnum["TemporaryHoldPreserve"] = "TEMPORARY_HOLD_PRESERVE";
})(MetadataOptionsTemporaryHoldEnum || (MetadataOptionsTemporaryHoldEnum = {}));
export var MetadataOptionsTimeCreatedEnum;
(function (MetadataOptionsTimeCreatedEnum) {
    MetadataOptionsTimeCreatedEnum["TimeCreatedUnspecified"] = "TIME_CREATED_UNSPECIFIED";
    MetadataOptionsTimeCreatedEnum["TimeCreatedSkip"] = "TIME_CREATED_SKIP";
    MetadataOptionsTimeCreatedEnum["TimeCreatedPreserveAsCustomTime"] = "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME";
})(MetadataOptionsTimeCreatedEnum || (MetadataOptionsTimeCreatedEnum = {}));
export var MetadataOptionsUidEnum;
(function (MetadataOptionsUidEnum) {
    MetadataOptionsUidEnum["UidUnspecified"] = "UID_UNSPECIFIED";
    MetadataOptionsUidEnum["UidSkip"] = "UID_SKIP";
    MetadataOptionsUidEnum["UidNumber"] = "UID_NUMBER";
})(MetadataOptionsUidEnum || (MetadataOptionsUidEnum = {}));
// MetadataOptions
/**
 * Specifies the metadata options for running a transfer.
**/
var MetadataOptions = /** @class */ (function (_super) {
    __extends(MetadataOptions, _super);
    function MetadataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "kmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageClass" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "storageClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symlink" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "symlink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temporaryHold" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "temporaryHold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeCreated" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], MetadataOptions.prototype, "uid", void 0);
    return MetadataOptions;
}(SpeakeasyBase));
export { MetadataOptions };
