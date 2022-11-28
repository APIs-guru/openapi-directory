import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";


export enum ClusterStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Ready = "READY",
    Creating = "CREATING",
    Resizing = "RESIZING",
    Disabled = "DISABLED"
}

export enum ClusterDefaultStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}


// Cluster
/** 
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultStorageType" })
  defaultStorageType?: ClusterDefaultStorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serveNodes" })
  serveNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClusterStateEnum;
}


// ClusterInput
/** 
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
export class ClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultStorageType" })
  defaultStorageType?: ClusterDefaultStorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serveNodes" })
  serveNodes?: number;
}
