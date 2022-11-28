import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamConfigurationIssue } from "./livestreamconfigurationissue";
export declare enum LiveStreamHealthStatusStatusEnum {
    Good = "good",
    Ok = "ok",
    Bad = "bad",
    NoData = "noData",
    Revoked = "revoked"
}
export declare class LiveStreamHealthStatus extends SpeakeasyBase {
    configurationIssues?: LiveStreamConfigurationIssue[];
    lastUpdateTimeSeconds?: string;
    status?: LiveStreamHealthStatusStatusEnum;
}
