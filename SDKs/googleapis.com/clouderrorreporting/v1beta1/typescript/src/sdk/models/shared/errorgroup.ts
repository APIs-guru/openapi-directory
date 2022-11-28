import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackingIssue } from "./trackingissue";


export enum ErrorGroupResolutionStatusEnum {
    ResolutionStatusUnspecified = "RESOLUTION_STATUS_UNSPECIFIED",
    Open = "OPEN",
    Acknowledged = "ACKNOWLEDGED",
    Resolved = "RESOLVED",
    Muted = "MUTED"
}


// ErrorGroup
/** 
 * Description of a group of similar error events.
**/
export class ErrorGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resolutionStatus" })
  resolutionStatus?: ErrorGroupResolutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trackingIssues", elemType: TrackingIssue })
  trackingIssues?: TrackingIssue[];
}
