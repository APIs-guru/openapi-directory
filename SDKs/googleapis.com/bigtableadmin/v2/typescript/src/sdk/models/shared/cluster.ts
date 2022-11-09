import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterConfig } from "./clusterconfig";
import { EncryptionConfig } from "./encryptionconfig";

export enum ClusterDefaultStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED"
,    Ssd = "SSD"
,    Hdd = "HDD"
}

export enum ClusterStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN"
,    Ready = "READY"
,    Creating = "CREATING"
,    Resizing = "RESIZING"
,    Disabled = "DISABLED"
}


// Cluster
/** 
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterConfig" })
  clusterConfig?: ClusterConfig;

  @Metadata({ data: "json, name=defaultStorageType" })
  defaultStorageType?: ClusterDefaultStorageTypeEnum;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serveNodes" })
  serveNodes?: number;

  @Metadata({ data: "json, name=state" })
  state?: ClusterStateEnum;
}
