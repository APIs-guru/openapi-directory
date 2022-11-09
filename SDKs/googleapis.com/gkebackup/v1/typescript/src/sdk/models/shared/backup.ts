import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterMetadata } from "./clustermetadata";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Deleting = "DELETING"
}


// Backup
/** 
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=allNamespaces" })
  allNamespaces?: boolean;

  @Metadata({ data: "json, name=clusterMetadata" })
  clusterMetadata?: ClusterMetadata;

  @Metadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @Metadata({ data: "json, name=configBackupSizeBytes" })
  configBackupSizeBytes?: string;

  @Metadata({ data: "json, name=containsSecrets" })
  containsSecrets?: boolean;

  @Metadata({ data: "json, name=containsVolumeData" })
  containsVolumeData?: boolean;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteLockDays" })
  deleteLockDays?: number;

  @Metadata({ data: "json, name=deleteLockExpireTime" })
  deleteLockExpireTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=manual" })
  manual?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=podCount" })
  podCount?: number;

  @Metadata({ data: "json, name=resourceCount" })
  resourceCount?: number;

  @Metadata({ data: "json, name=retainDays" })
  retainDays?: number;

  @Metadata({ data: "json, name=retainExpireTime" })
  retainExpireTime?: string;

  @Metadata({ data: "json, name=selectedApplications" })
  selectedApplications?: NamespacedNames;

  @Metadata({ data: "json, name=selectedNamespaces" })
  selectedNamespaces?: Namespaces;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @Metadata({ data: "json, name=stateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumeCount" })
  volumeCount?: number;
}
