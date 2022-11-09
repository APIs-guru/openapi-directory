import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetadataOptionsAclEnum {
    AclUnspecified = "ACL_UNSPECIFIED"
,    AclDestinationBucketDefault = "ACL_DESTINATION_BUCKET_DEFAULT"
,    AclPreserve = "ACL_PRESERVE"
}

export enum MetadataOptionsGidEnum {
    GidUnspecified = "GID_UNSPECIFIED"
,    GidSkip = "GID_SKIP"
,    GidNumber = "GID_NUMBER"
}

export enum MetadataOptionsKmsKeyEnum {
    KmsKeyUnspecified = "KMS_KEY_UNSPECIFIED"
,    KmsKeyDestinationBucketDefault = "KMS_KEY_DESTINATION_BUCKET_DEFAULT"
,    KmsKeyPreserve = "KMS_KEY_PRESERVE"
}

export enum MetadataOptionsModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    ModeSkip = "MODE_SKIP"
,    ModePreserve = "MODE_PRESERVE"
}

export enum MetadataOptionsStorageClassEnum {
    StorageClassUnspecified = "STORAGE_CLASS_UNSPECIFIED"
,    StorageClassDestinationBucketDefault = "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT"
,    StorageClassPreserve = "STORAGE_CLASS_PRESERVE"
,    StorageClassStandard = "STORAGE_CLASS_STANDARD"
,    StorageClassNearline = "STORAGE_CLASS_NEARLINE"
,    StorageClassColdline = "STORAGE_CLASS_COLDLINE"
,    StorageClassArchive = "STORAGE_CLASS_ARCHIVE"
}

export enum MetadataOptionsSymlinkEnum {
    SymlinkUnspecified = "SYMLINK_UNSPECIFIED"
,    SymlinkSkip = "SYMLINK_SKIP"
,    SymlinkPreserve = "SYMLINK_PRESERVE"
}

export enum MetadataOptionsTemporaryHoldEnum {
    TemporaryHoldUnspecified = "TEMPORARY_HOLD_UNSPECIFIED"
,    TemporaryHoldSkip = "TEMPORARY_HOLD_SKIP"
,    TemporaryHoldPreserve = "TEMPORARY_HOLD_PRESERVE"
}

export enum MetadataOptionsTimeCreatedEnum {
    TimeCreatedUnspecified = "TIME_CREATED_UNSPECIFIED"
,    TimeCreatedSkip = "TIME_CREATED_SKIP"
,    TimeCreatedPreserveAsCustomTime = "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME"
}

export enum MetadataOptionsUidEnum {
    UidUnspecified = "UID_UNSPECIFIED"
,    UidSkip = "UID_SKIP"
,    UidNumber = "UID_NUMBER"
}


// MetadataOptions
/** 
 * Specifies the metadata options for running a transfer.
**/
export class MetadataOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: MetadataOptionsAclEnum;

  @Metadata({ data: "json, name=gid" })
  gid?: MetadataOptionsGidEnum;

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: MetadataOptionsKmsKeyEnum;

  @Metadata({ data: "json, name=mode" })
  mode?: MetadataOptionsModeEnum;

  @Metadata({ data: "json, name=storageClass" })
  storageClass?: MetadataOptionsStorageClassEnum;

  @Metadata({ data: "json, name=symlink" })
  symlink?: MetadataOptionsSymlinkEnum;

  @Metadata({ data: "json, name=temporaryHold" })
  temporaryHold?: MetadataOptionsTemporaryHoldEnum;

  @Metadata({ data: "json, name=timeCreated" })
  timeCreated?: MetadataOptionsTimeCreatedEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: MetadataOptionsUidEnum;
}
