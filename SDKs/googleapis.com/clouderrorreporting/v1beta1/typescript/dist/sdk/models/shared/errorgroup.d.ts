import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrackingIssue } from "./trackingissue";
export declare enum ErrorGroupResolutionStatusEnum {
    ResolutionStatusUnspecified = "RESOLUTION_STATUS_UNSPECIFIED",
    Open = "OPEN",
    Acknowledged = "ACKNOWLEDGED",
    Resolved = "RESOLVED",
    Muted = "MUTED"
}
/**
 * Description of a group of similar error events.
**/
export declare class ErrorGroup extends SpeakeasyBase {
    groupId?: string;
    name?: string;
    resolutionStatus?: ErrorGroupResolutionStatusEnum;
    trackingIssues?: TrackingIssue[];
}
