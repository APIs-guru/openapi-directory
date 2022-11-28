import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
export declare enum ClusterStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Ready = "READY",
    Creating = "CREATING",
    Resizing = "RESIZING",
    Disabled = "DISABLED"
}
export declare enum ClusterDefaultStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}
/**
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
export declare class Cluster extends SpeakeasyBase {
    defaultStorageType?: ClusterDefaultStorageTypeEnum;
    encryptionConfig?: EncryptionConfig;
    location?: string;
    name?: string;
    serveNodes?: number;
    state?: ClusterStateEnum;
}
/**
 * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
**/
export declare class ClusterInput extends SpeakeasyBase {
    defaultStorageType?: ClusterDefaultStorageTypeEnum;
    encryptionConfig?: EncryptionConfig;
    location?: string;
    name?: string;
    serveNodes?: number;
}
