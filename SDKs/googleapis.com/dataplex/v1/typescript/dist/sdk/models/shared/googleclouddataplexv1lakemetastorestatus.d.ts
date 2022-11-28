import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1LakeMetastoreStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    None = "NONE",
    Ready = "READY",
    Updating = "UPDATING",
    Error = "ERROR"
}
/**
 * Status of Lake and Dataproc Metastore service instance association.
**/
export declare class GoogleCloudDataplexV1LakeMetastoreStatus extends SpeakeasyBase {
    endpoint?: string;
    message?: string;
    state?: GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;
    updateTime?: string;
}
