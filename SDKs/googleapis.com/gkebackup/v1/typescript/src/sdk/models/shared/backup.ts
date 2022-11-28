import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterMetadata } from "./clustermetadata";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";


export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}


// BackupInput
/** 
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
export class BackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterMetadata" })
  clusterMetadata?: ClusterMetadata;

  @SpeakeasyMetadata({ data: "json, name=deleteLockDays" })
  deleteLockDays?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=retainDays" })
  retainDays?: number;

  @SpeakeasyMetadata({ data: "json, name=selectedApplications" })
  selectedApplications?: NamespacedNames;

  @SpeakeasyMetadata({ data: "json, name=selectedNamespaces" })
  selectedNamespaces?: Namespaces;
}


// Backup
/** 
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allNamespaces" })
  allNamespaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterMetadata" })
  clusterMetadata?: ClusterMetadata;

  @SpeakeasyMetadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=configBackupSizeBytes" })
  configBackupSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=containsSecrets" })
  containsSecrets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containsVolumeData" })
  containsVolumeData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteLockDays" })
  deleteLockDays?: number;

  @SpeakeasyMetadata({ data: "json, name=deleteLockExpireTime" })
  deleteLockExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=manual" })
  manual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=podCount" })
  podCount?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceCount" })
  resourceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=retainDays" })
  retainDays?: number;

  @SpeakeasyMetadata({ data: "json, name=retainExpireTime" })
  retainExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=selectedApplications" })
  selectedApplications?: NamespacedNames;

  @SpeakeasyMetadata({ data: "json, name=selectedNamespaces" })
  selectedNamespaces?: Namespaces;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeCount" })
  volumeCount?: number;
}
