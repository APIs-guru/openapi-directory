import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetadataOptionsAclEnum {
    AclUnspecified = "ACL_UNSPECIFIED",
    AclDestinationBucketDefault = "ACL_DESTINATION_BUCKET_DEFAULT",
    AclPreserve = "ACL_PRESERVE"
}
export declare enum MetadataOptionsGidEnum {
    GidUnspecified = "GID_UNSPECIFIED",
    GidSkip = "GID_SKIP",
    GidNumber = "GID_NUMBER"
}
export declare enum MetadataOptionsKmsKeyEnum {
    KmsKeyUnspecified = "KMS_KEY_UNSPECIFIED",
    KmsKeyDestinationBucketDefault = "KMS_KEY_DESTINATION_BUCKET_DEFAULT",
    KmsKeyPreserve = "KMS_KEY_PRESERVE"
}
export declare enum MetadataOptionsModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    ModeSkip = "MODE_SKIP",
    ModePreserve = "MODE_PRESERVE"
}
export declare enum MetadataOptionsStorageClassEnum {
    StorageClassUnspecified = "STORAGE_CLASS_UNSPECIFIED",
    StorageClassDestinationBucketDefault = "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT",
    StorageClassPreserve = "STORAGE_CLASS_PRESERVE",
    StorageClassStandard = "STORAGE_CLASS_STANDARD",
    StorageClassNearline = "STORAGE_CLASS_NEARLINE",
    StorageClassColdline = "STORAGE_CLASS_COLDLINE",
    StorageClassArchive = "STORAGE_CLASS_ARCHIVE"
}
export declare enum MetadataOptionsSymlinkEnum {
    SymlinkUnspecified = "SYMLINK_UNSPECIFIED",
    SymlinkSkip = "SYMLINK_SKIP",
    SymlinkPreserve = "SYMLINK_PRESERVE"
}
export declare enum MetadataOptionsTemporaryHoldEnum {
    TemporaryHoldUnspecified = "TEMPORARY_HOLD_UNSPECIFIED",
    TemporaryHoldSkip = "TEMPORARY_HOLD_SKIP",
    TemporaryHoldPreserve = "TEMPORARY_HOLD_PRESERVE"
}
export declare enum MetadataOptionsTimeCreatedEnum {
    TimeCreatedUnspecified = "TIME_CREATED_UNSPECIFIED",
    TimeCreatedSkip = "TIME_CREATED_SKIP",
    TimeCreatedPreserveAsCustomTime = "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME"
}
export declare enum MetadataOptionsUidEnum {
    UidUnspecified = "UID_UNSPECIFIED",
    UidSkip = "UID_SKIP",
    UidNumber = "UID_NUMBER"
}
/**
 * Specifies the metadata options for running a transfer.
**/
export declare class MetadataOptions extends SpeakeasyBase {
    acl?: MetadataOptionsAclEnum;
    gid?: MetadataOptionsGidEnum;
    kmsKey?: MetadataOptionsKmsKeyEnum;
    mode?: MetadataOptionsModeEnum;
    storageClass?: MetadataOptionsStorageClassEnum;
    symlink?: MetadataOptionsSymlinkEnum;
    temporaryHold?: MetadataOptionsTemporaryHoldEnum;
    timeCreated?: MetadataOptionsTimeCreatedEnum;
    uid?: MetadataOptionsUidEnum;
}
