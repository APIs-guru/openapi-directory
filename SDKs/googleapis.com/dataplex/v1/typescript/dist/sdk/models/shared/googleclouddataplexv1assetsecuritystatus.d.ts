import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1AssetSecurityStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    Applying = "APPLYING",
    Error = "ERROR"
}
/**
 * Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
**/
export declare class GoogleCloudDataplexV1AssetSecurityStatus extends SpeakeasyBase {
    message?: string;
    state?: GoogleCloudDataplexV1AssetSecurityStatusStateEnum;
    updateTime?: string;
}
