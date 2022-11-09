import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrackingIssue } from "./trackingissue";

export enum ErrorGroupResolutionStatusEnum {
    ResolutionStatusUnspecified = "RESOLUTION_STATUS_UNSPECIFIED"
,    Open = "OPEN"
,    Acknowledged = "ACKNOWLEDGED"
,    Resolved = "RESOLVED"
,    Muted = "MUTED"
}


// ErrorGroup
/** 
 * Description of a group of similar error events.
**/
export class ErrorGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resolutionStatus" })
  resolutionStatus?: ErrorGroupResolutionStatusEnum;

  @Metadata({ data: "json, name=trackingIssues", elemType: shared.TrackingIssue })
  trackingIssues?: TrackingIssue[];
}
