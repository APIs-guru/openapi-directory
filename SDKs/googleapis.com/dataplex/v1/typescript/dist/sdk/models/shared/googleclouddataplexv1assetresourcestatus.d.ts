import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1AssetResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    Error = "ERROR"
}
/**
 * Status of the resource referenced by an asset.
**/
export declare class GoogleCloudDataplexV1AssetResourceStatus extends SpeakeasyBase {
    message?: string;
    state?: GoogleCloudDataplexV1AssetResourceStatusStateEnum;
    updateTime?: string;
}
