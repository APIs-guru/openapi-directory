import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterMetadata } from "./clustermetadata";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
export declare class BackupInput extends SpeakeasyBase {
    clusterMetadata?: ClusterMetadata;
    deleteLockDays?: number;
    description?: string;
    encryptionKey?: EncryptionKey;
    labels?: Map<string, string>;
    retainDays?: number;
    selectedApplications?: NamespacedNames;
    selectedNamespaces?: Namespaces;
}
/**
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
export declare class Backup extends SpeakeasyBase {
    allNamespaces?: boolean;
    clusterMetadata?: ClusterMetadata;
    completeTime?: string;
    configBackupSizeBytes?: string;
    containsSecrets?: boolean;
    containsVolumeData?: boolean;
    createTime?: string;
    deleteLockDays?: number;
    deleteLockExpireTime?: string;
    description?: string;
    encryptionKey?: EncryptionKey;
    etag?: string;
    labels?: Map<string, string>;
    manual?: boolean;
    name?: string;
    podCount?: number;
    resourceCount?: number;
    retainDays?: number;
    retainExpireTime?: string;
    selectedApplications?: NamespacedNames;
    selectedNamespaces?: Namespaces;
    sizeBytes?: string;
    state?: BackupStateEnum;
    stateReason?: string;
    uid?: string;
    updateTime?: string;
    volumeCount?: number;
}
